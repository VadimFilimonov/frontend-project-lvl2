#!/usr/bin/env node
import commander from 'commander';
import fs from 'fs';
import gendiff from '../src/index.js';

const { program } = commander;

const run = (filepath1, filepath2) => {
  const file1 = fs.readFileSync(filepath1);
  const file2 = fs.readFileSync(filepath2);
  const json1 = JSON.parse(file1);
  const json2 = JSON.parse(file2);
  const diff = gendiff(json1, json2);
  console.log(diff);
};

program
  .version('1.0.0')
  .arguments('<filepath1> <filepath2>')
  .usage('[options] <filepath1> <filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  .action(run);

program.parse(process.argv);
