const router = require('express').Router();
const Task = require('../models/Task');
const User = require('../models/User');
const verify = require('./verifyToken');

router.get('/', verify ,function (req, res) {
    console.log("Got a GET request for the task page");
    res.render('tasks/index');
 });
/*
router.get('/',(req, res) =>{
    console.log("Got a GET request for the task page");
    res.send(req.user);
    User.findById({_id: req.user})
    res.json({
        posts:{
            title: 'taskHome',
            description: 'private secret data'
        }
    });
 })
 */
//add task route
router.get('/add', (req,res)=>{
    res.render('task/add',{task: new Task() });
});

router.post('/add', async (req,res)=>{
    const task = new Task ({
        title: req.body.title,
        //user: req.body.user,
        description: req.body.description
    });
    try {
        const savedTask = await task.save();
        res.send(savedTask);
    } catch (err){
        res.status(400).send(err);
    }
});

module.exports = router;
