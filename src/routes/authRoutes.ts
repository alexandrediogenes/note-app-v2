import { Router } from 'express';
import { login, register } from '../controllers/authController';

const router = Router();

router.post('/register', register);
router.post('/login', login);

import { registerValidator, loginValidator } from '../validators/authValidator';
import { validate } from '../middleware/validateMiddleware';

router.post('/register', registerValidator, validate, register);
router.post('/login', loginValidator, validate, login);


export default router;

