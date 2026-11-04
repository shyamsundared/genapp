import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken"
import { JWT_SECRET } from "./config";
export const auth =(req:Request,res:Response,next:NextFunction)=>{
    //@ts-ignore
    const token=req.headers.authorization
    if(!token){
        res.status(403).json({
            message:"unauthorized access"
        })
        return
    }
    const decoded=jwt.verify(token,JWT_SECRET)
    if(typeof decoded !=="string"){
        return
    }
    next();
}