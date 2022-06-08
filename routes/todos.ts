import { Router } from 'express';
import { Todo } from '../models/Todo';

let todos: Todo[] = [];

const router = Router();

router.get('/todo', (req, res, next) => {
	res.status(200).json({ todos: todos });
});

router.post('/todo', (req, res, next) => {
	const { todo } = req.body;

	const newTodo: Todo = {
		todo,
		id: new Date().toISOString() + Math.random() + todo,
	};

	todos.push(newTodo);

	res.status(201).json({ created: newTodo });
});

router.put('/todo/:todoId', (req, res, next) => {
	const { todoId } = req.params;

	const foundTodo = todos.find((todo) => todo.id === todoId);

	if (!foundTodo) {
		return res.status(404).json({ error: "Couldn't find mention ID" });
	}

	foundTodo!.todo = req.body.todo;

	res.status(200).json({ updated: foundTodo });
});

router.delete('/todo/:todoId', (req, res, next) => {
	const { todoId } = req.params;

	todos = todos.filter((todo) => todo.id !== todoId);

	res.status(200).json({ deleted: 'successfully deleted' });
});

export default router;
