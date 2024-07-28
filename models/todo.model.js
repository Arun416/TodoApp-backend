const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  isComplete: {
    type: Boolean
  },
},{timestamps:true})

const Todo = mongoose.model('TodoList', todoSchema);


module.exports = Todo;