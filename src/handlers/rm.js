import { commandHandler } from "./../decorators/commandHandler.js";
import { promises as fsPromises } from "fs";

const rmCallback = async (path) => {
  await fsPromises.unlink(path);
};

export const handleRM = commandHandler(rmCallback);
