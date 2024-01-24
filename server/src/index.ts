import express from 'express';
import config from './environment/config';
import { createServer } from 'node:http';

const app = express();
const server = createServer(app);
const port = config.port;

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

server.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
