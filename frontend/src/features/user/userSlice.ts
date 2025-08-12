import { createSlice } from '@reduxjs/toolkit';
import { registerUser } from './usersThunk';
import { signInUser } from './usersThunk';

interface UserState {
  email: string | null;
  id: string | null;
  isAdmin: boolean;
}

const initialState: UserState = {
  email: null,
  id: null,
  isAdmin: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    removeUser: (state) => {
      state.email = null;
      state.id = null;
      state.isAdmin = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        console.log(action.payload, 'pay');
        state.email = action.payload.email;
        state.id = action.payload.id;
        state.isAdmin = action.payload.isAdmin;
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        state.email = action.payload.email;
        state.id = action.payload.id;
        state.isAdmin = action.payload.isAdmin;
      });
  },
});

export const { removeUser } = userSlice.actions;
export default userSlice.reducer;
