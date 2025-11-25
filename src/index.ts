#!/usr/bin/env node
import { Command } from 'commander';
import initCommand from './commands/init.js';
import ConfigCommand from './commands/viewConfig.js';
import explainCommand from './commands/explain/explainCommand.js';
const program = new Command();

console.log('Hello World');


initCommand(program);
ConfigCommand(program);
explainCommand(program);
program.parse();