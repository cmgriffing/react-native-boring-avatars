import fs from 'fs-extra';
import path from 'path';

// must be run from project root
const sourcePath = path.resolve(process.cwd(), 'src/lib');
const targetPath = path.resolve(process.cwd(), 'example/avatars');

fs.copySync(sourcePath, targetPath);
