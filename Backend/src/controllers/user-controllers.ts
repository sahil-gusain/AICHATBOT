import { NextFunction,Request,Response } from "express";

import User from "../models/User.js"
import { compare, hash } from "bcrypt";
import { createToken } from "../utils/token-manager.js";
import { COOKIE_NAME } from "../utils/constant.js";



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
          console.log(name + " " + password + " ");
          const hashpassword= await hash(password,10);
          const checkuser = await User.findOne({email});
          if(checkuser) return res.status(400).json({message:"error",cause:"user already exist"});
          const user=new User({name,password:hashpassword,email});
          await user.save();

          res.clearCookie(COOKIE_NAME,{
               path:"/",
               domain:"localhost",
               httpOnly:true,
               signed:true, 
          })
          
          const token = createToken(checkuser.id.tostring(),checkuser.email,"7d");
          const expires=new Date();
          expires.setDate(expires.getDate()+7)
          res.cookie(COOKIE_NAME,token,{
               path:"/",
               domain:"localhost",
               expires,
               httpOnly:true,
               signed:true,
          })

          return res.status(200).json({message:"ok"});
     }catch(error){
          return res.status(400).json({message:"error",cause:error.message});
     }
}

export const userLogin=async (req:Request,res:Response,next:NextFunction)=>{
     try{
          const {password,email}=req.body;
          
          const checkuser = await User.findOne({email});
          if(!checkuser) return res.status(400).json({message:"error",cause:"user does not exist"});

          const isPassCorrect = await compare(password,checkuser.password);
          if(!isPassCorrect) return res.status(400).json({message:"error",cause:"password is correct"});
          
          res.clearCookie(COOKIE_NAME,{
               path:"/",
               domain:"localhost",
               httpOnly:true,
               signed:true, 
          })

          const token = createToken(checkuser.id.toString(),checkuser.email,"7d");
          const expires=new Date();
          expires.setDate(expires.getDate()+7)
          res.cookie(COOKIE_NAME,token,{
               path:"/",
               domain:"localhost",
               expires,
               httpOnly:true,
               signed:true,
          })
          return res.status(200).json({message:"ok"});
     }catch(error){
          return res.status(400).json({message:"error",cause:error.message});
     }
  }