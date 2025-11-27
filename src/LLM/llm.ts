import { OpenRouter } from '@openrouter/sdk';
import { readConfigFile } from '../config/configMain.js';
import {Messages} from './MessageInterface.js';
import fs from 'node:fs';

export async function chat(filePath: string, messages: Messages[]): Promise<string>{
  // console.log(`File path: ${filePath}`);
  const config = await readConfigFile();
  // console.log(config);
  const ApiKey: string = config.apiKey;
  const modelName: string = config.model;
  // console.log(ApiKey);
  // console.log(modelName);

  const openRouter = new OpenRouter({apiKey: ApiKey});

  const completion = await openRouter.chat.send({
    model:modelName,
    messages: messages,
    stream: false,
  });
  return completion.choices[0].message.content?.toString() ?? '';
}

