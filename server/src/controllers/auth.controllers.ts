import type { Request, Response } from 'express';
import { User } from '../models/user.model.ts';
import bcrypt from 'bcrypt';

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
    res.status(201);
    res.status(201).json({
      success: true,
      message: 'User created successfully',
      email: user.email,
      id: user._id,
      isAdmin: user.isAdmin,
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};
export const signIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const candidate = await User.findOne({ email });

    if (!candidate) {
      return res
        .status(401)
        .json({ success: false, message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, candidate.passwordHash);

    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, message: 'Invalid email or password' });
    }

    return res.status(200).json({
      success: true,
      id: candidate._id,
      email: candidate.email,
      isAdmin: candidate.isAdmin,
      message: 'User logged in successfully',
    });
  } catch (error) {
    console.log(error instanceof Error ? error.message : error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};
export const logout = async (req: Request, res: Response) => {};
