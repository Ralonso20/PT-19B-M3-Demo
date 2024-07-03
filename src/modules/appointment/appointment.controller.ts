import { Request, Response } from 'express';
import { IAppointment } from './appointment.interfaces';
import { AppointmentService } from './appointment.service';

const appointmentService = new AppointmentService([]);

export const getAppointmentsController = async (
  req: Request,
  res: Response,
) => {
  const appointments = await appointmentService.getAppointments();
  res.json(appointments);
};

export const getAppointmentByIdController = async (
  req: Request,
  res: Response,
) => {
  const { id } = req.params;
  const appointment = await appointmentService.getAppointmentById(Number(id));
  res.json(appointment);
};

export const createAppointmentController = async (
  req: Request<IAppointment>,
  res: Response,
) => {
  const newAppointment = req.body;
  const appointment =
    await appointmentService.createAppointment(newAppointment);
  res.json(appointment);
};

export const updateAppointmentController = async (
  req: Request<IAppointment>,
  res: Response,
) => {
  const { id } = req.params;
  const appointment = await appointmentService.cancelAppointment(Number(id));
  res.json(appointment);
};
