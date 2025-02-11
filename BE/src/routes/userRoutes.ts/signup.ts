import { Request, Response } from "express";

export function signup (req : Request, res : Response){
    const { username : string, fName, lName, password } = req.body;
    
}