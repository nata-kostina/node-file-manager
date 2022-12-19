import path from "path";
import { promises as fsPromises } from "fs";
import { commandHandler } from "./../decorators/commandHandler.js";
import { dirHandler } from "./../fs/dirInterface.js";

const lsCallback = async () => {
  const data = await fsPromises.readdir(dirHandler.currentDir, {
    withFileTypes: true,
  });
  const table = [];
  for (const item of data) {
    try {
      const stat = await fsPromises.stat(
        path.join(dirHandler.currentDir, item.name)
      );
      const isDirectory = stat.isDirectory();
      table.push(new Cell(item.name, isDirectory ? "directory" : "file"));
    } catch (error) {}
  }
  console.table(table);
};

function Cell(name, type) {
  this.Name = name;
  this.Type = type;
}

export const handleLS = commandHandler(lsCallback);
