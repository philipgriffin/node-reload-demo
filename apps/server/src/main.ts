import { SampleService } from '@node-reload-demo/sample';
import express from 'express';
const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.get('/', (req, res) => {
  res.json(SampleService.getMessage());
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
