import express from 'express';
import vatimetroRoutes from './routes/vatimetro.routes.js';
import cors from 'cors';

const app = express();


app.use(cors());
app.use('/api', vatimetroRoutes);

export default app;
