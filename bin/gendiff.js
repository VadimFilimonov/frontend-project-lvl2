#!/usr/bin/env node
import commander from 'commander';
import gendiff from '../src/index.js';

const { program } = commander;

const run = (filepath1, filepath2, options) => {
  const diff = gendiff(filepath1, filepath2, options.format);
  console.log(diff);
};

program
  .version('1.0.0')
  .arguments('<filepath1> <filepath2>')
  .usage('[options] <filepath1> <filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format', 'stylish')
  .action(run);

program.parse(process.argv);
