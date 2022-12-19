import { commandHandler } from "./../decorators/commandHandler.js";
import fs from "fs";
import path from "path";
import { pipeline } from "stream/promises";

const cpCallback = async (args) => {
  const [oldPath, destinationDir] = args;
  const file = path.basename(oldPath);

  const readableStream = fs.createReadStream(oldPath, "utf8");
  const writableStream = fs.createWriteStream(path.join(destinationDir, file));

  await pipeline(readableStream, writableStream);
};

export const handleCP = commandHandler(cpCallback);
