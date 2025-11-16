// init command 
// This comman is used to initialize the cli tool
// it will create a new dir (config folder) in the user's home directory
// it will create a new file (config.json)
// ask user for the API key and save it to the config.json file
// set the default settings for the config.json file

import os from 'os';

console.log(os.homedir());