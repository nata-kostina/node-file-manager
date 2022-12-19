import { commands, errors } from "../constants.js";
import { handleCD } from "./cd.js";
import { validateArgs } from "./../tools/validator.js";
import { handleLS } from "./ls.js";
import { handleOS } from "./os.js";
import { handleHash } from "./hash.js";
import { handleRM } from "./rm.js";
import { handleCAT } from "./cat.js";
import { handleUP } from "./up.js";
import { handleADD } from "./add.js";
import { handleRN } from "./rn.js";
import { handleCP } from "./cp.js";

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
      case commands.RM:
        handleRM(...args);
        break;
      case commands.CAT:
        handleCAT(...args);
        break;
      case commands.UP:
        handleUP();
        break;
      case commands.ADD:
        handleADD(...args);
        break;
      case commands.RN:
        handleRN(args);
        break;
      case commands.CP:
        handleCP(args);
        break;
      default:
        throw new Error(errors.INVALID_INPUT);
    }
  } catch (error) {
    console.log("Error! ", error.message);
  }
};
