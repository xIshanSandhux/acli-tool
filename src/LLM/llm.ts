import { OpenRouter } from '@openrouter/sdk';
import { readConfigFile } from '../config/configMain.js';
import {Messages} from './MessageInterface.js';
import fs from 'node:fs';

export async function chat(filePath: string): Promise<string>{
  console.log(`File path: ${filePath}`);
  // let systemPrompt: string = '';
  // try{
  //   systemPrompt = fs.readFileSync('src/commands/explain/sysPrompt.md', 'utf8');
  // }catch(error){
  //   console.error(`Error reading system prompt: ${error}`);
  // }
  // console.log(systemPrompt);
  const config = await readConfigFile();
  console.log(config);
  const ApiKey: string = config.apiKey;
  const modelName: string = config.model;
  console.log(ApiKey);
  console.log(modelName);
  const messages: Messages[] = [
    {role: 'system', content: 'You are a helpful assistant.'},
    {role: 'user', content: 'What is the meaning of life?'}
  ]

  const openRouter = new OpenRouter({apiKey: ApiKey});

  const completion = await openRouter.chat.send({
    model:modelName,
    messages: messages,
    stream: false,
  });
  return JSON.stringify(completion.choices[0].message.content);
}

