import { commandHandler } from "./../decorators/commandHandler.js";
import fs from "fs/promises";
import path from "path";

const rnCallback = async (args) => {
  const [oldFile, newFile] = args;
  const dirname = path.dirname(oldFile);
  await fs.rename(oldFile, path.join(dirname, newFile));
};

export const handleRN = commandHandler(rnCallback);
