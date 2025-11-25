import { chat } from "../../LLM/llm.js";
// import { Messages } from "../../LLM/MessageInterface.js";
import { Command } from "commander";

export default function explainCommand(program: Command){

    program.command('explain')
    .description('Explain full code file or specific code block (line numbers)')
    .option('-f, --file <filePath>', 'Path to the code file to explain')
    .action(async (options)=>{
        console.log(options);
        if('file' in options){
            const response = await chat(options.file);
            console.log(response);
        }else{
            console.error('No file path provided');
        }
    })

}