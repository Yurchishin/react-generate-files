#! /usr/bin/env node

const {resolve, dirname} = require('path')
const {readFileSync} = require('fs')
const program = require('commander')
const {commanderGenerator} = require('./commander')

program
  .version('0.0.1', '-v, --version')
  .description('Typescript based react component generator cli')

program
  .command('generate <type> <name>')
  .alias('c')
  .description('Generate')
  .action(commanderGenerator)

program.parse(process.argv);
