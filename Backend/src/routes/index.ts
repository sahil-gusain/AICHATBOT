import { Request, Response, NextFunction } from "express";
import userRouter from "./userRouter.js";
import chatRouter from "./chatRouter.js";
import { Router } from "express";

const appRouter=Router();

appRouter.use("/user",userRouter);
appRouter.use("/chat",chatRouter);
//  const  appRouter= (req:Request,res:Response,next:NextFunction)=>{
//     try{
//         return res.send({
//             message: 'DAV Network Node',
//           }); 
//     }catch(error){
//         return res.status(200).send({message:error});
//     }
    
//  }

export default appRouter;