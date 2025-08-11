import type { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import { User } from '../models/user.model.ts';

export const getMe = async (req: Request, res: Response) => {};

export const signUp = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const candidate = await User.findOne({ email });

  if (candidate) {
    return res.status(409).json({
      success: false,
      message: `Account with this email (${email}) already exists`,
    });
  }

  try {
    const passwordHash = await bcrypt.hash(password, 10);
    const user = new User({ email, passwordHash });
    await user.save();
    res
      .status(201)
      .json({ success: true, message: 'User created successfully' });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};
export const signIn = async (req: Request, res: Response) => {};
export const logout = async (req: Request, res: Response) => {};
