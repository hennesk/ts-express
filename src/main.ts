import app from './app';
import log from './log';
import { SERVICE_PORT } from './config';

app.listen(SERVICE_PORT, () => {
  log.info(`Service listening on port ${SERVICE_PORT}`);
});
