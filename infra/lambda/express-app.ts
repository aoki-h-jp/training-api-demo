import serverlessExpress from '@vendia/serverless-express';
import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Hello from Express on Lambda using Function URLs!');
});

app.get('/health', (req: Request, res: Response) => {
  res.status(200).send('OK');
});

export const handler = serverlessExpress({ app });
