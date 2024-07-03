//create controller

import { Request, Response } from 'express';
import { IUser } from './users.interfaces';

const users: Array<IUser> = [];

export const getUsersController = (req: Request, res: Response) => {
  res.json(users);
};

export const getUserByIdController = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const user = users.find((u) => u.id === id);
  if (!user) {
    res.status(404).send('User not found');
    return;
  }
  res.json(user);
};

export const registerUserController = (req: Request<IUser>, res: Response) => {
  const newUser: IUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
};

export const loginUserController = (req: Request<IUser>, res: Response) => {
  const { email, nDni } = req.body;
  const user = users.find((u) => u.email === email && u.nDni === nDni);
  if (!user) {
    res.status(401).send('Invalid credentials');
    return;
  }
  res.json(user);
};
