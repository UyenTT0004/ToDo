const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Task = require('../models/Task');
const User = require('../models/User');
const verify = require('./verifyToken');
const {registerValidation, loginValidation} = require('../validation');

//display user data ?
router.get('/', verify, function (req, res) {
    console.log("Got a GET request for the user account page");
    res.send(req.user);
    const user = User.find({_id: req.user});
    res.render('users/index', {user: user});
 });


//create user route
router.get('/register', (req,res)=>{
    const user = new User();
    res.render('users/register',{user: user});

});

router.post('/register', async (req,res)=>{

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
        const token = jwt.sign({_id:savedUser._id},process.env.TOKEN_SECRET);
        res.header('auth-token', token).render('tasks/index',{ token: token});
    } catch (err){
        res.render('users/register',{errorMessage: 'Error on register'
        });
    }
});

//login
router.get('/login', (req,res) => {
    const user= new User();
    res.render('users/login', {user: user });
});

router.post('/login', async (req, res) => {
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
    const token = jwt.sign({_id:user._id},process.env.TOKEN_SECRET,{expiresIn: '30m'});
    res.header('auth-token', token).render('tasks/index',{ token: token});

});

router.get('/del_user', verify, async function (req, res) {
    console.log("Got a DELETE request for /del_user");
    res.send(req.user);
    try {
        await Task.deleteMany({user: req.user});
        await User.findByIdAndRemove(req.user);
        res.render('index',{errorMessage: 'deleted user, log in or register to continue'})
    }
    catch {
        res.redirect('user/index', {errorMessage: 'error when deleting user'})
    }
 })

module.exports = router;
