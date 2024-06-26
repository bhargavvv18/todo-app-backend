const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/ToDoRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors({
    origin: 'https://todo-app-frontend-ochre.vercel.app/',
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }));

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("Database connected successfully");
})
.catch((err) => {
    console.log(`Database connection error: ${err}`);
});

app.use('/api/todos', routes);

app.listen(PORT, () => {
    console.log(`Server started and running successfully at ${PORT}`);
});
