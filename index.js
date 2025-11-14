#!/usr/bin/env node
import { Command } from 'commander';
const program = new Command();

program.command('test')
.description('test command')
.action(() =>{
    console.log("test command is running");
})
program.parse();


