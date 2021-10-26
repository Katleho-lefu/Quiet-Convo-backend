import * as mongoose from 'mongoose'

export const UserSchema = new mongoose.Schema({

    username: { type: String},
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    
  });


export interface User{
    id: string;
    username?: string;
    email: string;
    password: string;
}

export interface LoginDto{
  email: string;
  password: string;
}

export interface RegisterDto{
  username: string;
  email: string;
  password: string;
}

