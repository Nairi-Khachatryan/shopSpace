import { createAsyncThunk } from '@reduxjs/toolkit';

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async ({ email, password }: { email: string; password: string }) => {
    const res = await fetch('http://localhost:5050/auth/signUp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      throw new Error('Registration failed');
    }

    return (await res.json()) as {
      email: string;
      id: string;
      isAdmin: boolean;
    };
  }
);

export const signInUser = createAsyncThunk(
  'user/signInUser',
  async ({
    email,
    password,
  }: {
    email: string;
    password: string;
    isAdmin: boolean;
  }) => {
    const res = await fetch('http://localhost:5050/auth/signIn', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      throw new Error('Sign In failed');
    }

    console.log(res, 'thunk res');

    return (await res.json()) as {
      email: string;
      id: string;
      isAdmin: boolean;
    };
  }
);
