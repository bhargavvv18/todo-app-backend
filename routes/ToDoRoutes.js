const express = require('express');
const router = express.Router();
const ToDoController = require('../controllers/ToDoController');

router.post('/addtask', ToDoController.CreateToDo);
router.get('/', ToDoController.getToDo);
router.patch("/updatetask/:id",ToDoController.updateToDo)

router.delete("/deletetask/:id",ToDoController.deleteToDo)


module.exports = router;
