import { parseArgs } from './src/cli/parseArgs.js';
import { appCli } from './src/cli/cliInterface.js';

const user = parseArgs('username');
appCli.greet(user)
