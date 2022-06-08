import express from 'express';
import todoRoutes from './routes/todos';

const PORT = 3000;

const app = express();

app.use(express.json());

app.use('/api', todoRoutes);

app.listen(PORT, () => console.log(`Running at Port ${PORT}`));
