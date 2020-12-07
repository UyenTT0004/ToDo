const jwt = require('jsonwebtoken');

module.exports = function auth (req,res,next){
    const token = req.header('auth-token');
    if(!token) return res.status(401).send('Access Denied!!!');
    try{
        jwt.verify(token,process.env.TOKEN_SECRET, (err,user));
        if (err) return res.status(401).send('Access Denied!!!')
        req.user =user;
    } catch (err){
        res.status(400).send('Invalid Token!')
    }
}
