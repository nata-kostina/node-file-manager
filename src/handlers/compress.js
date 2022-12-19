import { commandHandler } from "./../decorators/commandHandler.js";
import fs from "fs";
import path from "path";
import zlib from "zlib";

const compressCallback = async (args) => {
  const [filePath, destinationDir] = args;
  const file = path.basename(filePath);
  const readStream = fs.createReadStream(filePath);
  const writeStream = fs.createWriteStream(
    path.join(destinationDir, `${file}.br`)
  );
  const brotli = zlib.createBrotliCompress();
  readStream.pipe(brotli).pipe(writeStream);
};

export const handleCompress = commandHandler(compressCallback);
