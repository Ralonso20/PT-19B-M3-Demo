import express from 'express';
import dotenv from 'dotenv';
//import bodyParser from 'body-parser';
import { router as resourceRouter } from './routes/resources/resources.router';
dotenv.config({
  path: '.env',
});

const PORT = process.env.PORT ?? 3000;
const app = express();
app.use(express.json());
app.use('/api', resourceRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
