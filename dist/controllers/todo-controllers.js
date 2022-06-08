"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.putTodo = exports.postTodo = exports.getTodo = void 0;
let todos = [];
const getTodo = (req, res, next) => {
    res.status(200).json({ todos: todos });
};
exports.getTodo = getTodo;
const postTodo = (req, res, next) => {
    const { todo } = req.body;
    const newTodo = {
        todo,
        id: new Date().toISOString() + Math.random() + todo,
    };
    todos.push(newTodo);
    res.status(201).json({ created: newTodo });
};
exports.postTodo = postTodo;
const putTodo = (req, res, next) => {
    const { todoId } = req.params;
    const foundTodo = todos.find((todo) => todo.id === todoId);
    if (!foundTodo) {
        return res.status(404).json({ error: "Couldn't find mention ID" });
    }
    foundTodo.todo = req.body.todo;
    res.status(200).json({ updated: foundTodo });
};
exports.putTodo = putTodo;
const deleteTodo = (req, res, next) => {
    const { todoId } = req.params;
    todos = todos.filter((todo) => todo.id !== todoId);
    res.status(200).json({ deleted: 'successfully deleted' });
};
exports.deleteTodo = deleteTodo;
