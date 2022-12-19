import { commandHandler } from "./../decorators/commandHandler.js";
import fs from "fs/promises";
import path from "path";

const mvCallback = async (args) => {
  const [oldPath, destinationDir] = args;
  const file = path.basename(oldPath);
  await fs.rename(oldPath, path.join(destinationDir, file));
};

export const handleMV = commandHandler(mvCallback);
