import { Router, Request, Response } from 'express';
import { IResource } from './resources.interfaces';
import { authMiddleware } from '../../middleware/auth.middleware';

export const router = Router();
const resources: Array<IResource> = [];

router.post('/resources', (req: Request<IResource>, res: Response) => {
  const newResource: IResource = req.body;
  resources.push(newResource);
  res.status(201).json(newResource);
});

router.get(
  '/resources',
  authMiddleware,
  (req: Request, res: Response): void => {
    res.status(200).json(resources);
  },
);

router.get('/resources/:id', (req: Request<IResource>, res: Response) => {
  const id = req.params.id;
  const resource = resources.find((r) => r.id === id);
  if (!resource) {
    res.status(404).send('Resources not found');
    return;
  }
  res.status(200).json(resource);
});

router.put('/resources/:id', (req: Request<IResource>, res: Response) => {
  const id = req.params.id;
  const updatedResource = req.body;
  const index = resources.findIndex((r) => r.id === id);
  if (index === -1) {
    res.status(404).send('Resource not found');
    return;
  }
  resources[index] = updatedResource;
  res.json(updatedResource);
});

router.delete('/resources/:id', (req: Request<IResource>, res: Response) => {
  const id = req.params.id;
  const index = resources.findIndex((r) => r.id === id);
  if (index === -1) {
    res.status(404).send('Resource not found');
    return;
  }
  resources.splice(index, 1);
  res.status(204).send('Resource Delete');
});
