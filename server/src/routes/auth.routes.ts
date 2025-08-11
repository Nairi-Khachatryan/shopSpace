import express from 'express';
export const authRouter = express.Router();
import {
  getMe,
  logout,
  signIn,
  signUp,
} from '../controllers/auth.controllers.ts';

authRouter.get('/me', getMe);
authRouter.post('/signUp', signUp);
authRouter.post('/signIn', signIn);
authRouter.post('/logout', logout);
