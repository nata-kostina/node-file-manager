import { parseArgs } from "./src/cli/parseArgs.js";
import { appCli } from "./src/cli/cliInterface.js";
import { dirHandler } from "./src/fs/dirInterface.js";
import readline from "readline";
import { mainHandler } from "./src/handlers/mainHandler.js";
import { user, errLog } from "./src/constants.js";
import { processExitHandler } from "./src/tools/exitHandler.js";

const init = () => {
  user.name = parseArgs("username") || "Stranger";
  dirHandler.currentDir = dirHandler.userHomeDir;

  appCli.greet(user.name);

  try {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      terminal: false,
    });

    rl.on("line", (line) => {
      mainHandler(line);
    });

    rl.on("close", () => console.log("EVENT close"));

    process.on("SIGINT", () => processExitHandler());
  } catch (error) {
    errLog.push(error);
    processExitHandler();
  }
};

init();
