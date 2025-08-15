import { createAsyncThunk } from '@reduxjs/toolkit';

type RegisterUserResponse = {
  success: boolean;
  message: string;
  data?: {
    email: string;
    id: string;
    isAdmin: boolean;
  };
};

type SignInUserResponse = {
  success: boolean;
  message: string;
  email: string;
  id: string;
  isAdmin: boolean;
};

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async ({ email, password }: { email: string; password: string }) => {
    const res = await fetch('http://localhost:5050/auth/signUp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    return (await res.json()) as RegisterUserResponse;
  }
);

export const signInUser = createAsyncThunk(
  'user/signInUser',
  async ({ email, password }: { email: string; password: string }) => {
    const res = await fetch('http://localhost:5050/auth/signIn', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    return (await res.json()) as SignInUserResponse;
  }
);
