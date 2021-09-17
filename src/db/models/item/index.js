const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskSchema = new Schema({
  id: String,
  text: String,
  isCheck: Boolean
});

const Task = mongoose.model('tasks', taskSchema);

module.exports = Task;