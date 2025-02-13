import express, { json, Router } from 'express';
import adminRouter from './adminRoutes.ts';
import userRouter from './userRoutes.ts/index.js';

const app = express();

const port = 3000;
app.use(json());
app.use('/admin', adminRouter);

app.use('/user', userRouter);


app.listen(port, ()=>{
    console.log(`listening on ${port}`);
});

