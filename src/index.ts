import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { router as userRouter } from './modules/users/users.route';
import { router as appointmentRouter } from './modules/appointment/appointment.route';

dotenv.config({
  path: '.env',
});

const PORT = process.env.PORT ?? 3000;
const app = express();
app.use(bodyParser.json());
app.use('/api', userRouter);
app.use('/api', appointmentRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
