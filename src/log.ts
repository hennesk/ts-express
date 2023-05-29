import bunyan from 'bunyan';
import { SERVICE_NAME } from './config';

const log = bunyan.createLogger({ name: SERVICE_NAME });
export default log;
