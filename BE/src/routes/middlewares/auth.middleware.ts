import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface authReq extends Request {
    username : string
}
export function authMiddleware(req : authReq, res : Response, next : NextFunction) {
    const head = req.headers.authorization;
    if(!head)
    {
        return res.status(403).json({ 
            msg: "Invalid token format" 
        });
    }
    try {
        const token = head.split(' ')[1];
        const decoded = verify(token, process.env.JWT_SECRET as string);
        if(typeof(decoded) ==='string')
        {
            return res.status(403).json({ 
                msg: "Invalid token format" 
            });
        }
        req.username = decoded.username;
        next();
        return;
    } catch (error) {
        res.status(401).send({
            msg : "WRONG HEADER FOR AUTH"
        });
        return;
    }
    
}