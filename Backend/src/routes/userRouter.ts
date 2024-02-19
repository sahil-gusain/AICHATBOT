import { Router } from "express";
import { getUsers } from "../controllers/user-controllers.js";
import { userSignup } from "../controllers/user-controllers.js";
import { signupValidator, validator } from "../utils/validator.js";
const userRouter=Router();

userRouter.get('/',getUsers);
userRouter.post('/signup',validator(signupValidator),userSignup);

export default userRouter;