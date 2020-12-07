const router = require('express').Router();
const Task = require('../models/Task');
const User = require('../models/User');
const verify = require('./verifyToken');

router.get('/', verify ,function (req, res) {
    console.log("Got a GET request for the task page");
    res.send(req.user);
    const taskList = Task.find({user: req.user});
    res.render('tasks/index', {taskList: taskList});
 });
 
 //add task route
router.get('/add', verify, (req,res)=>{
    const newtask =new Task();
    res.render('tasks/add',{task: newtask });
});

router.post('/add', verify, async (req,res)=>{
    const task = new Task ({
        title: req.body.title,
        description: req.body.description,
        date: req.body.date,
        user: req.user
    });
    try {
        const savedTask = await task.save();
        res.render('task/index',{task: savedTask});
    } catch (err){
        res.render('tasks/index',{errorMessage: 'trouble when adding task'});
    }
});

module.exports = router;
