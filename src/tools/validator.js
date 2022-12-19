import { commands, errors } from "../constants.js";
import { promises as fsPromises } from "fs";

const commands_zero_arg = [commands.LS];
const commands_one_arg = [commands.CD, commands.OS, commands.HASH, commands.RM, commands.CAT];
const commands_two_arg = ["copy"];

const commands_with_paths = [commands.CD, commands.CAT, commands.RM];

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
  return (
    (commands_zero_arg.includes(command) && argNum === 0) ||
    (commands_one_arg.includes(command) && argNum === 1) ||
    (commands_two_arg.includes(command) && argNum === 2)
  );
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
