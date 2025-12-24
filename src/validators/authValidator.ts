import { body } from 'express-validator';

export const registerValidator = [
  body('name')
    .notEmpty().withMessage('Nome é obrigatório'),

  body('email')
    .isEmail().withMessage('Email inválido'),

  body('password')
    .isLength({ min: 6 })
    .withMessage('Senha deve ter no mínimo 6 caracteres')
];

export const loginValidator = [
  body('email')
    .isEmail().withMessage('Email inválido'),

  body('password')
    .notEmpty().withMessage('Senha é obrigatória')
];
