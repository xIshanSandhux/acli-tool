// viewConfig command
// This command will show the user the current config
import { Command } from 'commander';
import { readConfigFile, checkConfigFileExists } from '../config/configMain.js';
import { askingUserQuestions } from '../../dist/src/config/questions.js';
import chalk from 'chalk';

export default function ConfigCommand(program: Command) {
    program.command('config')
    .option('-v, --view', 'View Current Config')
    .option('-u, --update', 'Update Config')
    .action(async (options)=>{
        let currentConfig: Record<string, string>;
        if(checkConfigFileExists()){
            currentConfig = await readConfigFile();
        }else{
            return console.error(chalk.red('No config file found. Please run `ai init` to create one.'));
        }
        if('view' in options ){
            const heading : string = '⚙️ Current Config';
            console.log(chalk.bold(heading));
            console.log(chalk.dim("───────────────────────"));

            Object.keys(currentConfig).forEach((key:string) =>{
                console.log(chalk.cyan(key), `: ${currentConfig[key]}`)
            })
            console.log(chalk.dim("────────────────────────"));
        }
    })
}
