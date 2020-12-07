const express = require('express');
const router = require('express').Router();

router.get('/', function (req, res) {
    console.log("Got a GET request for the homepage");
    res.render('index');
 });

 module.exports =router;