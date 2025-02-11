import express, { Router } from 'express';
import adminRouter from './adminRoutes.ts';
import userRouter from './userRoutes.ts/index.js';

const app = express();

const port = 3000;

app.use('/admin', adminRouter);

app.use('/user', userRouter);


app.listen(port);

