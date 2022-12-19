import { commandHandler } from "./../decorators/commandHandler.js";
import fs from "fs";
import path from "path";
import zlib from "zlib";

const decompressCallback = async (args) => {
  const [filePath, destinationDir] = args;
  const fileName = path.parse(filePath).name; 
  const readStream = fs.createReadStream(filePath);
  const writeStream = fs.createWriteStream(path.join(destinationDir, fileName));
  const brotli = zlib.createBrotliDecompress();
  readStream.pipe(brotli).pipe(writeStream);
};

export const handleDecompress = commandHandler(decompressCallback);
