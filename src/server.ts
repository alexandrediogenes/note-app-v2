import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';

import { connectDB } from './config/database';
import authRoutes from './routes/authRoutes';
import noteRoutes from './routes/noteRoutes';

import { apiLimiter } from './middleware/rateLimit';
import { errorHandler, notFound } from './middleware/errorMiddleware';

dotenv.config();
connectDB();

const app = express();

// 🔐 Segurança e middlewares globais
app.use(helmet());
app.use(apiLimiter);
app.use(cors());
app.use(express.json());

// 📦 Rotas
app.use('/api/auth', authRoutes);
app.use('/api/notes', noteRoutes);

// 🏠 Rota raiz
app.get('/', (_, res) => {
  res.send('API Note App rodando 🚀');
});

// ❌ Rota não encontrada
app.use(notFound);

// 🚨 Handler global de erros (sempre por último)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🔥 Servidor rodando na porta ${PORT}`);
});
