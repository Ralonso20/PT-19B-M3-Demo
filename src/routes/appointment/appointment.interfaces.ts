import { Status } from '../../enums/status.enum';

export interface IAppointment {
  id: number;
  date: string;
  time: string;
  userId: number;
  status: Status;
}
