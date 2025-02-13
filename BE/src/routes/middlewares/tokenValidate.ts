import { NextFunction, Request, Response } from "express";

export function tokenValidate(req : Request, res : Response, next : NextFunction) {
    if(!localStorage.getItem("token"))
    {
        
    }
}