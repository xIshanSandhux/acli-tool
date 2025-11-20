import inquirer from 'inquirer';
import { updateConfigFile } from './configMain.js';
// questions for the user to answer
export function initQuestions() {
    return [
        {
            type: 'input',
            name: 'apiKey',
            message: 'Please Enter your API Key: '
        },
        {
            type: 'list',
            name: 'provider',
            message: 'Please Select your AI Provider: ',
            choices: ['groq', 'google'],
            default: 'groq'
        },
        {
            type: 'input',
            name: 'model',
            message: 'Please Enter your Model Name',
            default: 'llama3.1-8b-instant'
        },
        {
            type: 'confirm',
            name: 'cache',
            message: 'Do you want to enable caching?',
            default: false
        }
    ] 
}

// asking user questions and updating the config file
export async function askingUserQuestions() : Promise<void>{
    await inquirer.prompt(initQuestions()).then(async(userInput) =>{
        await updateConfigFile(userInput);
    }).catch((error) =>{
        console.error(`Error initializing the CLI tool getting user input: ${error}`);
    })
}