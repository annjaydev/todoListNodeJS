const { v4: uuidv4 } = require('uuid');

let tasks = [];

module.exports.getAllTasks = async (req, res, next) => {
  res.send({data: tasks});
};

module.exports.createNewTask = (req, res, next) => {
  const body = req.body;

  if (body.hasOwnProperty('text') && body.hasOwnProperty('isCheck')) {

    body.id = uuidv4();
    tasks.push(body);
    res.send({data: tasks});

  } else {
    res.status(422).send('Error! Params not correct');
  }
};

module.exports.changeTaskInfo = (req, res, next) => {
  const body = req.body;

  if (body.hasOwnProperty('id') && (body.hasOwnProperty('text') || body.hasOwnProperty('isCheck'))) {

    tasks = tasks.map(item => {
      if(item.id === body.id) {
        item.text = body.text;
        item.isCheck = body.isCheck;
      }
      return item;
    });

    res.send({data: tasks});
  } else {
    res.status(422).send('Error! Params not correct');
  }
};

module.exports.deleteTask = (req, res, next) => {
  const id = req.query.id;
  const initialLength = tasks.length;
  tasks = tasks.filter(item => item.id !== id);

  if (!id) {
    return res.status(422).send('Error! Params not correct');
  } 

  if (tasks.length === initialLength) {
    return res.status(404).send('Task not found');
  }

  res.send({data: tasks});
};