import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export async function signup (req : Request, res : Response){
    const { username , fName , lName, password } = req.body;
    const fi = await prisma.user.findFirst({
        where : {
            username
        }
    });

    if(fi)
    {
        res.status(401).send({
            msg : "User exists with the provided USERNAME"
        });
        return;
    }

    try {
        const newUser = await prisma.user.create({
            data : { 
                username, 
                fName, 
                lName, 
                password 
        }});
    }
    catch(e) {
        res.status(500).send({
            msg : e
        });
        return;
    }  
    res.status(200).send({
        msg : "User created succesfully",
    });
    console.log("User created succesfully");
}