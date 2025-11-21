#!/usr/bin/env node
import { Command } from 'commander';
import initCommand from './commands/init.js';
import ConfigCommand from './commands/viewConfig.js';
const program = new Command();

console.log('Hello World');


initCommand(program);
ConfigCommand(program);
program.parse();