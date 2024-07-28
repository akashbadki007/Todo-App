const express = require('express');
const app = express();

// load config from env file
require('dotenv').config();
const PORT = process.env.PORT || 4000;

// middleware to parse json request body
app.use(express.json());

// Import Routes for TODO Api
const todoRoutes = require('./Routes/todos');

// Mount the todo api routes
app.use('/api/v1',todoRoutes);

// server Started
app.listen(PORT, () => {
    console.log(`Server Started Successfully at ${PORT}`);
})

// Connect Database
const dbConnect = require('./Config/database');
dbConnect();

// default Route
app.get('/', (req,res) => {
    res.send(`<h1> This is HomePage </h1>`)
})
