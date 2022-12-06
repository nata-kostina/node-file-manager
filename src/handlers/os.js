import { commandHandler } from "./../decorators/commandHandler.js";
import os from "os";
import { errors } from "./../constants.js";
import { dirHandler } from "./../fs/dirInterface.js";

const osCallback = (args) => {
  const lowerArgs = args.toLowerCase();
  switch (lowerArgs) {
    case "--eol":
      console.log(JSON.stringify(os.EOL));
      break;
    case "--cpus":
      const numOfCpus = os.cpus().length;
      const cpusInfo = os.cpus().map(({ model, speed }) => {
        return { model, "clock rate": `${speed / 1000}GHz` };
      });
      console.log(`CPUS number: ${numOfCpus}`);
      console.table(cpusInfo);
      break;
    case "--homedir":
      console.log(dirHandler.userHomeDir);
      break;
    case "--username":
      console.log(os.userInfo().username);
      break;
    case "--architecture":
      console.log(process.arch);
      break;
    default:
      throw new Error(errors.INVALID_INPUT);
  }
};

export const handleOS = commandHandler(osCallback);
