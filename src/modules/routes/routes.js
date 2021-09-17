const express = require('express');
const router = express.Router();

const {
  getAllTasks,
  createNewTask,
  updateTask, 
  deleteTask
} = require('../controllers/task.controllers');

router.get('/allTasks', getAllTasks);
router.post('/createTask', createNewTask);
router.patch('/updateTask', updateTask);
router.delete('/deleteTask', deleteTask);

module.exports = router;