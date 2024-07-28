const express = require('express');
const router = express.Router();

const {createTodo} = require('../Controller/createTodo');
const {getTodos,getTodoById} = require("../Controller/getTodos");
const {updateTodo} = require("../Controller/updateTodo");
const {deleteTodo} = require("../Controller/deleteTodo");

router.post("/createTodo",createTodo);
router.get("/getTodos",getTodos);
router.get("/getTodos/:id",getTodoById);
router.put("/updateTodo/:id",updateTodo);
router.delete("/deleteTodo/:id", deleteTodo);

module.exports = router;