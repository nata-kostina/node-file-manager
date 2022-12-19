import os from "os";

export const dirHandler = {
  _userHomeDir: os.homedir(),
  _currentDir: null,
  get userHomeDir() {
    return this._userHomeDir;
  },
  get currentDir() {
    return this._currentDir;
  },
  set currentDir(path) {
    process.chdir(path);
    this._currentDir = process.cwd();
  },
};
