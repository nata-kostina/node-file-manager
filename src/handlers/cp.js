import { commandHandler } from "./../decorators/commandHandler.js";
import fs from "fs";
import path from "path";

const cpCallback = async (args) => {
  const [oldPath, destinationDir] = args;
  const file = path.basename(oldPath);

  const readableStream = fs.createReadStream(oldPath, "utf8");
  const writableStream = fs.createWriteStream(path.join(destinationDir, file));

  readableStream.on("data", (chunk) => {
    writableStream.write(chunk);
  });
};

export const handleCP = commandHandler(cpCallback);
