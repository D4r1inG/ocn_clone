import fs from 'fs';
import path from 'path';

export const read = (localPath: string, type: 'file' | 'dir') => {
  try {
    if (type === 'file') return fs.readFileSync(path.join(process.cwd(), localPath), 'utf8');

    return fs.readdirSync(path.join(process.cwd(), localPath));
  } catch (e) {
    return null;
  }
};
