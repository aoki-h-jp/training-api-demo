import serverlessExpress from '@vendia/serverless-express';
import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Hello from Express on Lambda using Function URLs!');
});

export const handler = serverlessExpress({ app });
