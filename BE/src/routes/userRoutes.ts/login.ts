import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
export async function login(req : Request, res : Response) {
    const { username, password } = req.body;
    const found = await prisma.user.findFirst({
        where : {
            username
        },
        select : {
            username : true,
            password : true
        }
    });
    if(!found)
    {
        res.status(404).send({
            msg : "User Not Found, please signup"
        });
    }
    else
    {
        const token = jwt.sign(found, process.env.JWT_SECRET as string);
        res.status(200).send({
            token
        });
    }
}