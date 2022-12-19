import { commandHandler } from "./../decorators/commandHandler.js";
import fs from "fs/promises";
import path from "path";
import { dirHandler } from "./../fs/dirInterface.js";

const rnCallback = async (args) => {
  const [oldFile, newFile] = args;
  await fs.rename(path.join(dirHandler.currentDir, oldFile), path.join(dirHandler.currentDir, newFile));
};

export const handleRN = commandHandler(rnCallback);
