//create controller

import { Request, Response } from 'express';
import { IUser } from './users.interfaces';
import { UserService } from './users.service';
import { CredentialsService } from '../auth/credentials.service';
import { CreateUserDTO } from './dtos/create.user.dto';

const credentialsService = new CredentialsService([]);
const userService = new UserService([], credentialsService);

export const getUsersController = async (req: Request, res: Response) => {
  const users = await userService.getUsers();
  res.json(users);
};

export const getUserByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await userService.getUserById(Number(id));
  res.json(user);
};

export const registerUserController = async (
  req: Request<CreateUserDTO>,
  res: Response,
) => {
  const newUser = req.body;
  const user = await userService.registerUser(newUser);
  res.json(user);
};

export const loginUserController = async (
  req: Request<IUser>,
  res: Response,
) => {
  const { username, password } = req.body;
  const userId = await userService.login(username, password);
  res.json(userId);
};
