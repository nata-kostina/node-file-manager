import { commands, errors } from "../constants.js";
import { promises as fsPromises } from "fs";

const commands_zero_arg = [commands.LS];
const commands_one_arg = [commands.CD];
const commands_two_arg = ["copy"];

const commands_with_paths = [commands.CD];

export async function validateArgs(command, args) {
  const parsedArgs = parseArgs(args);
  const isArgNumValidFlag = isArgNumValid(command, parsedArgs.length);
  const isValid = commands_with_paths.includes(command)
    ? await doesPathExist(parsedArgs)
    : true;

  if (isArgNumValidFlag && isValid) {
    return parsedArgs;
  } else {
    throw new Error(errors.INVALID_INPUT);
  }
}

function isArgNumValid(command, argNum) {
  if (
    (commands_zero_arg.includes(command) && argNum === 0) ||
    (commands_one_arg.includes(command) && argNum === 1) ||
    (commands_two_arg.includes(command) && argNum === 2)
  ) {
    return true;
  }
  return false;
}

function parseArgs(args) {
  return args.filter((arg) => arg.length).map((arg) => arg.trim());
}

export async function doesPathExist(args) {
  const promises = args.map((arg) => fsPromises.access(arg));
  const results = await Promise.allSettled(promises);
  const rejected = results.some((result) => result.status === "rejected");
  return !rejected;
}
