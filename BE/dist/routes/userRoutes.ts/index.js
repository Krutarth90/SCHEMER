"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../middlewares/auth");
const signup_1 = require("./signup");
const userRouter = (0, express_1.Router)();
userRouter.post('/signup', auth_1.authMiddleware, signup_1.signup);
exports.default = userRouter;
