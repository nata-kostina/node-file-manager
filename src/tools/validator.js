import { commands, errors } from "../constants.js";
import { promises as fsPromises } from "fs";

const commands_one_arg = [commands.CD];
const commands_two_arg = ["copy"];

export const validateArgs = async (command, args) => {
  const parsedArgs = parseArgs(args);
  const isValid = isArgNumValid(command, parsedArgs.length);
  const doesExist = await doesPathExist(parsedArgs);
  if (isValid && doesExist) {
    return parsedArgs;
  } else {
    throw new Error(errors.INVALID_INPUT);
  }
};

const isArgNumValid = (command, argNum) => {
  if (
    (commands_one_arg.includes(command) && argNum === 1) ||
    (commands_two_arg.includes(command) && argNum === 2)
  ) {
    return true;
  }
  return false;
};

function parseArgs(args) {
  return args.filter((arg) => arg.length).map((arg) => arg.trim());
}

export async function doesPathExist(args) {
  const promises = args.map((arg) => fsPromises.access(arg));
  const results = await Promise.allSettled(promises);
  const rejected = results.some((result) => result.status === "rejected");
  return !rejected;
}
