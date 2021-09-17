const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const apiRoutes = require('./src/modules/routes/routes');

const URL = 'mongodb+srv://userOne:NotAStrongPassword@cluster0.uptqx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true});

app.use(cors());
app.use(bodyParser.json()); 
app.use('/', apiRoutes);

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});