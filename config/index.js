import * as dotenv from 'dotenv'
dotenv.config()
import { readFile } from 'fs/promises';
const configurations = JSON.parse(await readFile(new URL('./config.json', import.meta.url)));
const env = process.env.NODE_ENV;
process.env.PORT = configurations[env].server.port;

export default configurations[env];
