import { Request, Response } from 'express';
import { IAppointment } from './appointment.interfaces';
import { Status } from '../../enums/status.enum';

const appointments: Array<IAppointment> = [];

export const getAppointmentsController = (req: Request, res: Response) => {
  res.json(appointments);
};

export const getAppointmentByIdController = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const appointment = appointments.find((a) => a.id === id);
  if (!appointment) {
    res.status(404).send('Appointment not found');
    return;
  }
  res.json(appointment);
};

export const createAppointmentController = (
  req: Request<IAppointment>,
  res: Response,
) => {
  const newAppointment: IAppointment = req.body;
  newAppointment.status = Status.ACTIVE;
  appointments.push(newAppointment);
  res.status(201).json(newAppointment);
};

export const updateAppointmentController = (
  req: Request<IAppointment>,
  res: Response,
) => {
  const id = Number(req.params.id);
  const appointment = appointments.find((a) => a.id === id);
  if (!appointment) {
    res.status(404).send('Appointment not found');
    return;
  }

  appointment.status = Status.CANCELLED;
  res.json(appointment);
};
