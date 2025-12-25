import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import { apiLimiter } from './middleware/rateLimit';
import { connectDB } from './config/database';
import authRoutes from './routes/authRoutes';
import noteRoutes from './routes/noteRoutes';
import { notFound, errorHandler } from './middleware/errorMiddleware';

dotenv.config();
connectDB();
if (!process.env.JWT_SECRET) {
  throw new Error('JWT_SECRET não definido no ambiente');
}


const app = express();

// Segurança e limites
app.use(helmet());
app.use(apiLimiter);

// CORS
app.use(cors()); // permite que o frontend acesse a API
// Se quiser restringir ao frontend:
// app.use(cors({ origin: 'https://note-app-frontend.onrender.com' }));

// Middleware para JSON
app.use(express.json());

// Rotas
app.use('/api/auth', authRoutes);
app.use('/api/notes', noteRoutes);

// Rota raiz
app.get('/', (_, res) => {
  res.send('API Note App rodando 🚀');
});

// Middleware de erro
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🔥 Servidor rodando na porta ${PORT}`);
});
