import { dirHandler } from "./../fs/dirInterface.js";
import { commandHandler } from "./../decorators/commandHandler.js";

const cdCallback = (path) => {
    dirHandler.currentDir = path;
};

export const handleCD = commandHandler(cdCallback);
