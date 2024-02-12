import { Router } from "express";
import { getUsers } from "../controllers/user-controllers.js";
import { userSignup } from "../controllers/user-controllers.js";
const userRouter=Router();

userRouter.get('/',getUsers);
userRouter.post('/signup',userSignup);

export default userRouter;