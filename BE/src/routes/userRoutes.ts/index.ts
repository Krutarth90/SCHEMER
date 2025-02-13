import { Express, Router } from "express";
import { authMiddleware } from "../middlewares/auth";
import { signup } from "./signup";

const userRouter = Router();

userRouter.post('/signup', authMiddleware, signup);
export default userRouter;