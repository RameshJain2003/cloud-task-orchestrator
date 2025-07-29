import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { taskRoutes } from './routes/taskRoutes';
import { requestLogger } from './middleware/authMiddleware';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(requestLogger);

app.use('/api/v1/tasks', taskRoutes);

app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok', uptime: process.uptime(), timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`[TaskOrchestrator] Server listening on port ${PORT}`);
});
  // Exported prometheus metrics
  // Exported prometheus metrics
  // Exported prometheus metrics
  // Exported prometheus metrics
  // Exported prometheus metrics
  // Exported prometheus metrics
  // Exported prometheus metrics
  // Exported prometheus metrics
  // Exported prometheus metrics
  // Exported prometheus metrics
  // Exported prometheus metrics
  // Exported prometheus metrics
  // Exported prometheus metrics
  // Exported prometheus metrics
  // Exported prometheus metrics
  // Exported prometheus metrics
  // Exported prometheus metrics
  // Exported prometheus metrics
  // Exported prometheus metrics
  // Exported prometheus metrics
  // Exported prometheus metrics
  // Exported prometheus metrics
  // Exported prometheus metrics
  // Exported prometheus metrics
  // Exported prometheus metrics
  // Exported prometheus metrics
  // Exported prometheus metrics
  // Exported prometheus metrics
  // Exported prometheus metrics
  // Exported prometheus metrics
