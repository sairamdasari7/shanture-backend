const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/todo_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const taskRoutes = require('./routes/tasks');
app.use('/tasks', taskRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
