import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: {
      required: true,
      type: String,
      unique: true,
    },
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
    password: {
      required: true,
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model('User', userSchema);
