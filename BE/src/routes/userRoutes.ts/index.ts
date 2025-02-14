import { Express, Router } from "express";
import { signUpSchemamiddleware } from "../middlewares/signUpSchema.middleware";
import { signup } from "./signup";
import { logInSchemamiddleware } from "../middlewares/logInSchema.middleware";
import { login } from "./login";

const userRouter = Router();

userRouter.post('/signup', signUpSchemamiddleware, signup);

userRouter.post('/login', logInSchemamiddleware, login);

export default userRouter;