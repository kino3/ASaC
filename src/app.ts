import express, { Express, Request, Response } from 'express';
const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Hello World!');
});

const server = app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

export default server;