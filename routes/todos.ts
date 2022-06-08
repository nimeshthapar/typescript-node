import { Router } from 'express';
import { Todo } from '../models/Todo';

const todos: Todo[] = [];

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
});

export default router;
