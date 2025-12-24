import { Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { AuthRequest } from '../types';

export const protect = (req: AuthRequest, res: Response, next: NextFunction): void => {
  try {
    // Pega o token do header
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      res.status(401).json({ 
        success: false,
        message: 'Não autorizado - Token não fornecido' 
      });
      return;
    }

    // Verifica o token
    const decoded = jwt.verify(token, process.env.JWT_SECRET || '') as { userId: string };
    
    // Adiciona o userId na request
    req.userId = decoded.userId;
    
    next();
  } catch (error) {
    res.status(401).json({ 
      success: false,
      message: 'Não autorizado - Token inválido' 
    });
  }
};