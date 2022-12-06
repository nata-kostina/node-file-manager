import { commands, errors } from "../constants.js";
import { handleCD } from "./cd.js";
import {  validateArgs } from "./../tools/validator.js";

export const mainHandler = async (line) => {
  const [command, ...args] = line.trim().split(" ");
  try {
    const validatedArgs = await validateArgs(command, args);
    switch (command) {
      case commands.CD:
        handleCD(...validatedArgs);
        break;
      default:
        throw new Error(errors.INVALID_INPUT);
    }
  } catch (error) {
    console.log("Error! ", error.message);
  }
};
