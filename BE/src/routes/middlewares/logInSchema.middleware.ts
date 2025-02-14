import { NextFunction, Request, Response } from "express";
import { logInSchema } from "../userRoutes.ts/schema/schema";

export function logInSchemamiddleware (req : Request, res : Response, next : NextFunction){
    const {username, password} = req.body;
    const result = logInSchema.safeParse({
        username,
        password
    });

    if(!result.success)
    {
        res.status(400).send({
            msg : "Wrong Input"
        });
        return;
    }
    
    next();
}