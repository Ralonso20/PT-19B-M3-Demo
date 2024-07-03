import { Status } from '../../enums/status.enum';

export interface IAppointment {
  id?: number;
  date: Date;
  time: string;
  userId: number;
  status: Status;
}
