import { ValidationChain, body, validationResult } from "express-validator";
import { NextFunction, Request,Response } from "express";

export const validator=(validations : ValidationChain[]) =>{
    return async (req:Request,res:Response,next:NextFunction)=>{
        for(let validation of validations){
            const result = await validation.run(req)
            if(!result.isEmpty()){
                break;
            }
        }
        const errors = validationResult(req);
        if(errors.isEmpty()){
            return next();
        }
        return res.status(422).json({error : errors.array()});
    };
};

export const loginValidator =[
    body("password")
    .trim()
    .notEmpty()
    .isLength({min:8})
    .withMessage("password is incorrect or empty"),
    body("email").trim().notEmpty().isEmail().withMessage("email is incorrect")
]

export const signupValidator =[
    body("name").notEmpty().withMessage("name is required"),
    ...loginValidator
]