const express = require('express');
const router = express.Router();

const Task = require('./../models/task');

// GET
router.get('/', async (req, res) => {        
    const tasks = await Task.find()
    console.log(tasks);
    res.json(tasks);

});

router.get('/:id', async (req, res) => {        
    const tasks = await Task.findById(req.params.id);
    res.json(tasks);
});

// POST
router.post('/', async (req, res) => {
    const {title, description} = req.body;
    const task = new Task({ title, description });
    await task.save();
    res.json({status: 'Task saved'});
});

// PUT
router.put('/:id', async (req, res) => {
    const {title, description} = req.body;
    const newTask = { title, description };
    console.log(req.params.id);
    await Task.findByIdAndUpdate(req.params.id, newTask)
    res.json({status: 'Task updated'});
})

// DELETE
router.delete('/:id', async (req, res) => {
    await Task.findByIdAndRemove(req.params.id);
    res.json({status: 'Task removed'});
})

module.exports = router;