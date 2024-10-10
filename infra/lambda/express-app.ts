import express, { Request, Response } from 'express';
import serverless from 'serverless-http';

const app = express();

// ルートハンドリング
app.get('/', (req: Request, res: Response) => {
  res.send('Hello from Express on Lambda using Function URLs!');
});

export const handler = serverless(app);
