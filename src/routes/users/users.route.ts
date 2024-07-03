import { Router } from 'express';
import {
  getUsersController,
  getUserByIdController,
  registerUserController,
  loginUserController,
} from './users.controller';

export const router = Router();

router.get('/users', getUsersController);
router.get('/users/:id', getUserByIdController);
router.post('/users', registerUserController);
router.post('/users/login', loginUserController);
