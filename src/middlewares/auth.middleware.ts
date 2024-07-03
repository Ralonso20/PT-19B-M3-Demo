import { Request, Response, NextFunction } from 'express';

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.headers.authorization;
  if (!token) {
    res.status(401).send('Unauthorized');
    return;
  }
  console.log(token);
  const tokenValue = token.split(' ')[1];
  console.log(tokenValue);
  if (tokenValue !== 'autenticado') {
    res.status(403).send('Forbidden');
    return;
  }
  next();
};
