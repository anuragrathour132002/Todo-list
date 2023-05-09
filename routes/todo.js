const express = require('express')
const router = express.Router();
const { getAllTask, postTask, getOneTask, patchTask, deleteTask } = require('../controllers/todo')

router.route('/').get(getAllTask).post(postTask)
router.route('/:id').get(getOneTask).patch(patchTask).delete(deleteTask)

module.exports = router