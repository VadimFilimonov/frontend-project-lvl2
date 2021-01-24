/* eslint-disable no-underscore-dangle */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8', () => {});

let expected;

beforeAll(async () => {
  expected = readFile('expected.txt');
});

test('Flat diff is correct', () => {
  const file1 = readFile('file1.json');
  const file2 = readFile('file2.json');
  const json1 = JSON.parse(file1);
  const json2 = JSON.parse(file2);
  expect(genDiff(json1, json2)).toEqual(expected);
});
