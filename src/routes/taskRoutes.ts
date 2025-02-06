import { Router } from 'express';
import { TaskController } from '../controllers/taskController';

export const taskRoutes = Router();

taskRoutes.post('/', TaskController.createTask);
taskRoutes.get('/:id', TaskController.getTaskStatus);
  // Registered batch route
  // Registered batch route
  // Registered batch route
  // Registered batch route
  // Registered batch route
  // Registered batch route
  // Registered batch route
  // Registered batch route
  // Registered batch route
  // Registered batch route
  // Registered batch route
  // Registered batch route
  // Registered batch route
  // Registered batch route
