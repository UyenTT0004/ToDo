const router = require('express').Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const {registerValidation, loginValidation} = require('../validation');



//create user route
router.post('/register', async (req,res)=>{

    const {error} = registerValidation(req.body);

    if(error) return res.status(400).send(error.details[0].message);

    //Check if user already in database
    const emailExist = await User.findOne({email: req.body.email});
    if(emailExist) return res.status(400).send('Email already exists');

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
	res.send({user: user._id});
    } catch (err){
        res.status(400).send(err);
        }
});

//login
router.post('/login', async (req, res) => {
    //Validate user
    const {error} = loginValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    //Check if user already in database
    const user = await User.findOne({email: req.body.email});
    if(!user) return res.status(400).send('Cannot find account');

    //check if password correct 
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if(!validPass) return res.status(400).send('Email/password incorrect');

    res.send('Logged in!');
});
 
module.exports = router;
