import { NextFunction, Request, Response } from "express";
import { signupSchema } from "../userRoutes.ts/schema/schema";

export function authMiddleware (req : Request, res : Response, next : NextFunction)
{
    const username = req.body.username , 
    fName = req.body.fName , 
    lName = req.body.lName, 
    password = req.body.password;

    const result = signupSchema.safeParse({
        username,
        fName,
        lName,
        password
    });

    if(!result.success)
    {
        console.log(result.error);
        return;
    }
    next();
}