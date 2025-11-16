import { configDirPath, configFilePath } from './paths.js';
import fs from 'node:fs';

console.log(configDirPath());
console.log(configFilePath());

if (!fs.existsSync(configDirPath())) {
    console.log('Config directory not found');
}