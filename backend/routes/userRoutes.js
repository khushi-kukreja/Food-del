import express from 'express'
import { loginUser,regiterUser } from '../controller/userController.js'


const userRouter=express.Router();

userRouter.post("/register",regiterUser);
userRouter.post("/login",loginUser);

export default userRouter;