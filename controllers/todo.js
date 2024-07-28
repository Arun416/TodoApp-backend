const todoModel = require('../models/todo.model');


const fetchAllTodos = async(req,res)=>{
    try {
        let results =  await todoModel.find();
        if(results){
            res.status(200).json(results)
        }
    }
    catch(err){
        res.status(500).send(err)
    }
}


const addTodos = async(req,res)=>{
    try {
        const todo = new todoModel({
            id: req.body.id,
            title: req.body.title,
            isComplete: req.body.isComplete,
        })

        let results =  await todo.save();
        if(results){
            res.status(200).json({message:"Nice,Todo added Successfully", data:results})
        }

    }
    catch(err){
        res.status(500).send(err)
    }
}


const updateTodo = async(req,res)=>{
    try {
        const { title, isComplete } = req.body;
        const todo = await todoModel.findByIdAndUpdate(req.params.id, { title, isComplete }, { new: true });
        if (!todo) {
          return res.status(404).json({ message: 'Todo not found' });
        }
        res.status(200).json({message:"Todo Updated Successfully",todo});
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
}

// Delete a todo by ID
const deleteTodo = async (req, res) => {
    try {
      const todo = await todoModel.findByIdAndDelete(req.params.id);
      if (!todo) {
        return res.status(404).json({ message: 'Todo not found' });
      }
      res.status(200).json({ message: 'Todo deleted' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };


module.exports = {fetchAllTodos,addTodos,updateTodo,deleteTodo};