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
    logOutUser: (state) => {
      state.email = null;
      state.id = null;
      state.isAdmin = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        if (action.payload.data) {
          state.email = action.payload.data.email;
          state.id = action.payload.data.id;
          state.isAdmin = action.payload.data.isAdmin;
        }
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        if (action.payload) {
          state.email = action.payload.email;
          state.id = action.payload.id;
          state.isAdmin = action.payload.isAdmin;
        }
      });
  },
});

export const { logOutUser } = userSlice.actions;
export default userSlice.reducer;
