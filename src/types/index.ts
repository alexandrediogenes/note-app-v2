import { Request } from 'express';

export interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
}

export interface INote {
  _id: string;
  title: string;
  content: string;
  category?: string;
  tags?: string[];
  color?: string;
  userId: string;
  isPinned: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthRequest extends Request {
  userId?: string;
}