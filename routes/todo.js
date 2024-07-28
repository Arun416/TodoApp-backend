const router = require('express').Router();
const {fetchAllTodos, addTodos,updateTodo,deleteTodo} = require('../controllers/todo');


router.get('/todo',fetchAllTodos);
router.post('/todo',addTodos);
router.patch('/todo/:id',updateTodo);
router.delete('/todo/:id',deleteTodo);

module.exports = router;