const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Must provide the task to do!!'],
        trim: true,
        maxlength: [20, 'Task name can not be greater than 20 characters!!'],
    },
    completed: {
        type: Boolean,
        default: false,
    }
})

module.exports = mongoose.model('Todo', TodoSchema)