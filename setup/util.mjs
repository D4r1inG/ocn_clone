/* eslint-disable no-console */
import path from 'path';
import { promises as fs } from 'fs';
import { spawn } from 'child_process';
import chalk from 'chalk';

export const log = {
  green: (message) => console.log(chalk.greenBright(message)),
  greenBold: (message) => console.log(chalk.green.bold(message)),
  red: (message) => console.log(chalk.bgRed.bold(message)),
  blue: (message) => console.log(chalk.cyan(message)),
};

export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const command = (cmd, args, options = {}) => {
  // Enable shell option for cross-platform compatibility
  options.shell = true;

  return new Promise((resolve, reject) => {
    const child = spawn(cmd, args, options);

    child.stdout.on('data', (data) => {
      console.log(data.toString());
    });

    child.on('exit', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Command "${cmd}" failed with code ${code}`));
      }
    });
  });
};

export const createDir = async (dir) => {
  const dirExists = await fs.stat(dir).catch(() => null);
  if (!dirExists) await fs.mkdir(dir);
};

export const move = async (oldPath, newPath, callback) => {
  // Move file from oldPath to newPath, if err using copy instead
  await fs.rename(oldPath, newPath, function (err) {
    if (err) {
      if (err.code === 'EXDEV') {
        copy();
      } else {
        callback(err);
      }
      return;
    }
    callback();
  });

  function copy() {
    const readStream = fs.createReadStream(oldPath);
    const writeStream = fs.createWriteStream(newPath);

    readStream.on('error', callback);
    writeStream.on('error', callback);

    readStream.on('close', function () {
      fs.unlink(oldPath, callback);
    });

    readStream.pipe(writeStream);
  }
};

export const getPathName = (name) => {
  return path.join(__dirname, name);
};

export const deleteFolderRecursive = async (path) => {
  const stat = await fs.stat(path);
  if (stat.isDirectory()) {
    const files = await fs.readdir(path);
    await Promise.all(files.map((file) => deleteFolderRecursive(`${path}/${file}`)));
    await fs.rmdir(path);
  } else {
    await fs.unlink(path);
  }
};
