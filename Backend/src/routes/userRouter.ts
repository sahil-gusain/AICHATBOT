import { Router } from "express";
import { getUsers, userLogin } from "../controllers/user-controllers.js";
import { userSignup } from "../controllers/user-controllers.js";
import { loginValidator, signupValidator, validator } from "../utils/validator.js";

const userRouter=Router();

userRouter.get('/',getUsers);
userRouter.post('/signup',validator(signupValidator),userSignup);
userRouter.post('/login',validator(loginValidator),userLogin);
export default userRouter;