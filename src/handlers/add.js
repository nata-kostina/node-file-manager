import { commandHandler } from "./../decorators/commandHandler.js";
import fs from "fs";
import path from "path";
import { dirHandler } from "./../fs/dirInterface.js";

const addCallback = async (name) => {
  fs.open(path.join(dirHandler.currentDir, name), "w", function (err, file) {
    if (err) throw err;
  });
};

export const handleADD = commandHandler(addCallback);
