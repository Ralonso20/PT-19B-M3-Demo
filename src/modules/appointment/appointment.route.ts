//create route and import controller

import { Router } from 'express';
import {
  getAppointmentsController,
  getAppointmentByIdController,
  createAppointmentController,
  updateAppointmentController,
} from './appointment.controller';

export const router = Router();

router.get('/appointments', getAppointmentsController);
router.get('/appointments/:id', getAppointmentByIdController);
router.post('/appointments/schedule', createAppointmentController);
router.put('/appointments/cancel/:id', updateAppointmentController);
