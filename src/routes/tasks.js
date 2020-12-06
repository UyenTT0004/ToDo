const router = require('express').Router()
const Task = require('../models/Task')

router.get('/',(req, res) =>{
    console.log("Got a GET request for the task page");
    res.send('taskHome');
 })
//create user route
router.post('/add', async (req,res)=>{
    const task = new Task ({
        title: req.body.title,
        //user: req.body.user,
        description: req.body.description
    });
    try {
        const savedTask = await task.save()
        res.send(savedTask)
    } catch (err){
        res.status(400).send(err);
    }
});

module.exports = router;