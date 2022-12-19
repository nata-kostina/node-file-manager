import { errLog, user } from "./../constants.js";
import { appCli } from "./../cli/cliInterface.js";

export const processExitHandler = () => {
  if (errLog.length) {
    console.log("Error!", errLog.pop());
  } else {
    appCli.sayBye(user.name);
  }
  process.exit();
};
