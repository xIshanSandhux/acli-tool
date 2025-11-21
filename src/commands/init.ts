// init command 
// This command is used to initialize the cli tool
// it will create a new dir (config folder) in the user's home directory
// it will create a new file (config.json)
// ask user for the API key, provider, model, and cache settings and save it to the config.json file
import { createConfigDir, createConfigFile, updateConfigFile, checkConfigDirExists, checkConfigFileExists } from '../config/configMain.js';
import inquirer from 'inquirer';
import { askingUserQuestions } from '../config/questions.js';
import { Command } from 'commander';

export default function initCommand(program: Command) {
    program.command('init')
    .description('Initialize the CLI tool')
    .action(async () => {
        try {
            if (!checkConfigDirExists()) {
                await createConfigDir();
            }
            if (!checkConfigFileExists()) {
                await createConfigFile();
                await askingUserQuestions();
            }else{
                const updateRequest = await inquirer.prompt([
                    {
                        type: 'confirm',
                        name: 'updateConfirmation',
                        message: 'Config file already exists. Do you want to update it?',
                        default: false
                    }
                ])
                .then(async(updateRequest) => {
                    if(updateRequest.updateConfirmation){
                        await askingUserQuestions();
                    }
                }).catch((error) => {
                    console.error(`Error initializing the CLI tool getting user input: ${error}`);
                })
            }
        } catch (error) {
            console.error(`Error initializing the CLI tool: ${error}`);
        }
    })
}
