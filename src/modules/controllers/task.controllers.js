const Task = require('../../db/models/item/index');
const { v4: uuidv4 } = require('uuid');

const getAllTasks = async (req, res) => {
  const result = await Task.find();
  res.send({data: result});
}

const createNewTask = async (req, res) => {
  const body = req.body;

  if (body.hasOwnProperty('text') && body.hasOwnProperty('isCheck')) {

    const task = new Task({
      id: uuidv4(),
      text: body.text,
      isCheck: body.isCheck
    });

    await task.save();
    const result = await Task.find();

    res.send({data: result});
  } else {
    res.status(422).send('Error! Params not correct');
  }
}

const updateTask = async (req, res) => {
  const body = req.body;

  if (body.hasOwnProperty('id') && (body.hasOwnProperty('text') || body.hasOwnProperty('isCheck'))) {

    const editedTask = await Task.findOne({id: body.id});

    editedTask.text = body.text;
    editedTask.isCheck = body.isCheck;

    await editedTask.save();
    const result = await Task.find();

    res.send({data: result});
  } else {
    res.status(422).send('Error! Params not correct');
  }
}

const deleteTask = async (req, res) => {
  const id = req.query.id;

  if (!id) {
    return res.status(422).send('Error! Params not correct');
  } 
  
  await Task.deleteOne({id: id});
  const result = await Task.find();

  res.send({data: result});
}

module.exports = {
  getAllTasks,
  createNewTask,
  updateTask, 
  deleteTask
};