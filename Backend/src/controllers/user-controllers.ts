import { NextFunction,Request,Response } from "express";

import User from "../models/User.js"
import { hash } from "bcrypt";

export const  getUsers=async (req:Request,res:Response,next:NextFunction)=>{
   try{
        const users=await User.find();
        return res.status(200).json({message:"ok",users});
   }catch(error){
        return res.status(200).json({message:"error",cause:error.message});
   }
}
export const userSignup=async (req:Request,res:Response,next:NextFunction)=>{
     try{
          const {name,password,email}=req.body;
          const hashpassword= await hash(password,10);
          const user=new User({name,password,email});
          await user.save();
          return res.status(200).json({message:"ok"});
     }catch(error){
          return res.status(200).json({message:"error",cause:error.message});
     }
  }