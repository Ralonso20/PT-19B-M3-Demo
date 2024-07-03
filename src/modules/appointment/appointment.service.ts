import { IAppointment } from './appointment.interfaces';
import { Status } from '../../enums/status.enum';

export class AppointmentService {
  constructor(private readonly appointmentsArray: Array<IAppointment>) {}

  async getAppointments(): Promise<Array<IAppointment>> {
    return this.appointmentsArray;
  }

  async getAppointmentById(id: number): Promise<IAppointment | null> {
    return this.appointmentsArray.find((a) => a.id === id) || null;
  }

  async cancelAppointment(id: number): Promise<IAppointment | null> {
    const appointment = this.appointmentsArray.find((a) => a.id === id);
    if (!appointment) {
      throw new Error('Appointment not found');
    }

    appointment.status = Status.CANCELLED;
    return appointment;
  }

  async createAppointment(newAppointment: IAppointment): Promise<IAppointment> {
    if (!newAppointment.userId) {
      throw new Error('User ID is required');
    }

    newAppointment.id = this.appointmentsArray.length + 1;
    newAppointment.status = Status.ACTIVE;
    this.appointmentsArray.push(newAppointment);
    return newAppointment;
  }
}
