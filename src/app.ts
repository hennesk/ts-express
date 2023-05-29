import express from 'express';
import log from './log';

const app = express();

app.get('/healthcheck', (req, res) => {
  log.info(`Received request from ${req.ip} for ${req.url}`);
  res.send('OK');
});

export default app;
