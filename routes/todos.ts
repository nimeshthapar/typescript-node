import { Router } from 'express';
import {
	getTodo,
	postTodo,
	putTodo,
	deleteTodo,
} from '../controllers/todo-controllers';

const router = Router();

router.get('/todo', getTodo);

router.post('/todo', postTodo);

router.put('/todo/:todoId', putTodo);

router.delete('/todo/:todoId', deleteTodo);

export default router;
