import express from 'express';
import { createServer } from 'node:http';

const app = express();
const server = createServer(app);
const portNumber = 3003;

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

server.listen(portNumber, () => {
  console.log(`server running at http://localhost:${portNumber}`);
});
