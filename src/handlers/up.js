import { commandHandler } from "./../decorators/commandHandler.js";
import path from "path";
import { dirHandler } from "./../fs/dirInterface.js";

const upCallback = async () => {
  const newDir = path.join(dirHandler.currentDir, "..");
  dirHandler.currentDir = newDir;
};

export const handleUP = commandHandler(upCallback);
