const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const {registerValidation, loginValidation} = require('../validation');

//display user data ?
router.get('/', function (req, res) {
    console.log("Got a GET request for the user account page");
    res.render('users/index');
 });


//create user route
router.get('/register', (req,res)=>{
    res.render('users/register',{user: user=new User() });

});

router.post('/register_', async (req,res)=>{

    const {error} = registerValidation(req.body);
    //error.details[0].message

    if(error) return res.render('users/register',{errorMessage: 'check your fields, name must be 6 characters long'});

    //Check if user already in database
    const emailExist = await User.findOne({email: req.body.email});
    if(emailExist) return res.render('users/register',{errorMessage: 'Email already exists'});

    //Hash password
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(req.body.password, salt);


    //create new user
    const newuser = new User ({

        name: req.body.name,
        email: req.body.email,
        password: hashPass
    });
    try {
        const savedUser = await newuser.save();
        const token = jwt.sign({_id:user._id},process.env.TOKEN_SECRET);
        res.header('auth-token', token).render('/tasks/index',{ token: token});
    } catch (err){
        res.render('users/register',{user: user, errorMessage: 'Error on register'
        });
    }
});

//login
router.get('/login', (req,res) => {
    res.render('users/login', {user: new User() });
});

router.post('/login_', async (req, res) => {
    //Validate user
    const {error} = loginValidation(req.body);
    if(error) return res.render('users/login',{user: user,errorMessage: 'check your fields, password atleast 6 characters long'});

    //Check if user already in database
    const user = await User.findOne({email: req.body.email});
    if(!user) return res.render('index',{user: user, errorMessage: 'email registerd, try logging in '});

    //check if password correct 
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if(!validPass) return res.render('users/login',{user: user, errorMessage: 'Incorrect password'});

    // create and assign a token
    const token = jwt.sign({_id:user._id},process.env.TOKEN_SECRET);
    res.header('auth-token', token).render('/tasks/index',{ token: token});

});
/*
app.delete('/del_user', function (req, res) {
    console.log("Got a DELETE request for /del_user");
    res.send('Hello DELETE');
 })
*/
module.exports = router;
