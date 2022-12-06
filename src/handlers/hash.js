import { resolve } from "path";
import { readFile } from "fs/promises";
import { createHash } from "crypto";
import { commandHandler } from "./../decorators/commandHandler.js";

const hashCallback = async (path) => {
  const filePath = resolve(path);
  const fileContent = await readFile(filePath);
  const hash = createHash("sha256").update(fileContent).digest("hex");
  console.log(hash);
};

export const handleHash = commandHandler(hashCallback);
