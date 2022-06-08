import { NextFunction, Request, Response } from 'express';
import { Todo } from '../models/Todo';

let todos: Todo[] = [];

export const getTodo = (req: Request, res: Response, next: NextFunction) => {
	res.status(200).json({ todos: todos });
};

export const postTodo = (req: Request, res: Response, next: NextFunction) => {
	const { todo } = req.body;

	const newTodo: Todo = {
		todo,
		id: new Date().toISOString() + Math.random() + todo,
	};

	todos.push(newTodo);

	res.status(201).json({ created: newTodo });
};

export const putTodo = (req: Request, res: Response, next: NextFunction) => {
	const { todoId } = req.params;

	const foundTodo = todos.find((todo) => todo.id === todoId);

	if (!foundTodo) {
		return res.status(404).json({ error: "Couldn't find mention ID" });
	}

	foundTodo!.todo = req.body.todo;

	res.status(200).json({ updated: foundTodo });
};

export const deleteTodo = (req: Request, res: Response, next: NextFunction) => {
	const { todoId } = req.params;

	todos = todos.filter((todo) => todo.id !== todoId);

	res.status(200).json({ deleted: 'successfully deleted' });
};
