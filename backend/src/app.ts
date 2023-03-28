import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import router from '../routes/router';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(router);


app.listen(port, () => {
  console.log(`Listening at ${port}.\n`);
})