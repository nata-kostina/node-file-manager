import { commands, errors } from "../constants.js";
import { handleCD } from "./cd.js";
import { validateArgs } from "./../tools/validator.js";
import { handleLS } from "./ls.js";
import { handleOS } from "./os.js";
import { handleHash } from './hash.js';

export const mainHandler = async (line) => {
  const [command, ...args] = line.trim().split(" ");
  try {
    const validatedArgs = await validateArgs(command, args);
    switch (command) {
      case commands.CD:
        handleCD(...validatedArgs);
        break;
      case commands.LS:
        handleLS();
        break;
      case commands.OS:
        handleOS(...args);
        break;
      case commands.HASH:
        handleHash(...args);
        break;
      default:
        throw new Error(errors.INVALID_INPUT);
    }
  } catch (error) {
    console.log("Error! ", error.message);
  }
};
