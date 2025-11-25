import { OpenRouter } from '@openrouter/sdk';
import { readConfigFile } from './config/configMain.js';

const config = await readConfigFile();
console.log(config);
const ApiKey = config.apiKey;
const modelName = config.model;
console.log(ApiKey);
console.log(modelName);

const openRouter = new OpenRouter({apiKey: ApiKey});

const completion = await openRouter.chat.send({
  model:modelName,
  messages: [
    {
      role: 'user',
      content: 'What is the meaning of life?',
    },
  ],
  stream: false,
});
console.log(JSON.stringify(completion.choices[0].message.content));
