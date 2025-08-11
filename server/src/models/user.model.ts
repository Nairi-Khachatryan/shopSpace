import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    email: {
      required: true,
      type: String,
      unique: true,
    },
    isAdmin: {
      required: true,
      type: Boolean,
      default: false,
    },
    passwordHash: {
      required: true, 
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model('User', userSchema);
