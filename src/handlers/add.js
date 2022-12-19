import { commandHandler } from "./../decorators/commandHandler.js";
import fs from "fs/promises";
import path from "path";
import { dirHandler } from "./../fs/dirInterface.js";

const addCallback = async (name) => {
  await fs.open(path.join(dirHandler.currentDir, name), "w");
};

export const handleADD = commandHandler(addCallback);
