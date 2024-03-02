import { Router } from "express";
import { getUsers, userLogin,verifyUser } from "../controllers/user-controllers.js";
import { userSignup } from "../controllers/user-controllers.js";
import { loginValidator, signupValidator, validator } from "../utils/validator.js";
import { verifyToken } from "../utils/token-manager.js";
const userRouter=Router();

userRouter.get('/',getUsers);
userRouter.post('/signup',validator(signupValidator),userSignup);
userRouter.post('/login',validator(loginValidator),userLogin);
userRouter.get("/auth-status",verifyToken,verifyUser);
export default userRouter;