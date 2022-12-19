import { commandHandler } from "./../decorators/commandHandler.js";
import fs from "fs";

const catCallback = async (path) => {
  const readableStream = fs.createReadStream(path, { encoding: "utf8" });
  readableStream.on("data", (chunk) => {
    console.log(chunk);
  });
};

export const handleCAT = commandHandler(catCallback);
