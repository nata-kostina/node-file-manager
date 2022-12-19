import { dirHandler } from "../fs/dirInterface.js";

export const commandHandler = (callback) => {
  return (...args) => {
    try {
      callback(...args);
      console.log(`You are currently in ${dirHandler.currentDir}`);
    } catch (error) {
      throw new Error("Operation failed");
    }
  };
};
