import { NextFunction,Request,Response } from "express";
import User from "../models/User.js"

export const  getUsers=async (req:Request,res:Response,next:NextFunction)=>{
   try{
        const users=await User.find();
        return res.status(200).json({message:"ok",users});
   }catch(error){
        return res.status(200).json({message:"error",cause:error.message});
   }
}