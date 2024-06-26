const ToDoModel = require('../models/ToDoModel')


const CreateToDo = async (req, res) => {
    try {
        const { text } = req.body

        if (!text) {
            return res.status(400).json({ message: 'Text is required' })
        }

        const newToDo = new ToDoModel({
            text
        })
        await newToDo.save()
        res.status(201).json(newToDo)
    } catch (err) {
        console.log('There is an error', err)
        res.status(500).json({ message: 'Server error' })
    }
}



const getToDo = async (req, res) => {
    try {
        const toDos = await ToDoModel.find()
        res.status(200).json(toDos)
    } catch (err) {
        console.log('There is an error', err)
        res.status(500).json({ message: 'Server error' })
    }
}






const updateToDo = async (req, res) => {
    try {
        const { _id, text } = req.body;

        if (!_id || !text) {
            return res.status(400).json({ message: 'ID and text are required' });
        }

        const updatedTask = await ToDoModel.findByIdAndUpdate(
            _id,
            { text },
            { new: true } 
        );

        if (!updatedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }

        res.status(200).json(updatedTask);
    } catch (err) {
        console.log("There is an error", err);
        res.status(500).json({ message: "Server error" });
    }
};




const deleteToDo = async (req, res) => {
    try {
        const { id } = req.params;

        const deletetask = await ToDoModel.findByIdAndDelete(id);

        if (!deletetask) {
            return res.status(404).json({ message: 'Task not found' });
        }

        res.status(204).send();
    } catch (err) {
        console.log("There is an error", err);
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = { CreateToDo, getToDo , updateToDo , deleteToDo} 