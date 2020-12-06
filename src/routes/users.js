const router = require('express').Router()
const mongoose = require('mongoose');
const User = require('../models/User')

//create user route
router.post('/register', async (req,res)=>{
    const newuser = new User ({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    try {
        const savedUser = await newuser.save()
    } catch {
        res.status(400).send(err);
        }
});
module.exports = router;