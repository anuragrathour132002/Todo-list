const Task = require('../models/task')

// get all items
const getAllTask = async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json({ tasks })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

// create item
const postTask = async (req, res) => {
    try {
        const tasks = await Task.create(req.body)
        res.status(201).json({ tasks })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

// get one item
const getOneTask = async (req, res) => {
    try {
        const { id: taskID } = req.params
        const tasks = await Task.findOne({ _id: taskID })
        if (!tasks) {
            return res.status(404).json({ msg: `No task id ${taskID}` })
        }
        res.status(200).json({ tasks })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

// update one item
const patchTask = async (req, res) => {
    try {
        const { id: taskID } = req.params
        const tasks = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
            new: true,
            runValidators: true,
        })
        if (!tasks) {
            return res.status(404).json({ msg: `No task id ${taskID}` })
        }
        res.status(200).json({ tasks })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

// delete one item
const deleteTask = async (req, res) => {
    try {
        const { id: taskID } = req.params
        const tasks = await Task.findOneAndDelete({ _id: taskID })
        if (!tasks) {
            return res.status(404).json({ msg: `No task id ${taskID}` })
        }
        res.status(200).json({ tasks })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

module.exports = {
    getAllTask,
    postTask,
    getOneTask,
    patchTask,
    deleteTask
}