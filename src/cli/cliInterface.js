import { user } from "./../constants.js";
import { dirHandler } from "./../fs/dirInterface.js";

export const appCli = {
  greet() {
    console.log(`Welcome to the File Manager, ${user.name}!`);
    console.log(`You are currently in ${dirHandler.currentDir}`);
  },
  sayBye() {
    console.log(`Thank you for using File Manager, ${user.name}, goodbye!`);
  },
};
