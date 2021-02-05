/* eslint-disable no-underscore-dangle */
import path from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index';
import parser from '../src/parser';
import readFile from '../src/readFile';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

let expected;

beforeAll(async () => {
  const filepath = getFixturePath('expected.txt');
  expected = readFile(filepath);
});

test('Diff is correct', () => {
  const filepath1 = getFixturePath('file1.json');
  const filepath2 = getFixturePath('file2.json');
  const json1 = parser(filepath1);
  const json2 = parser(filepath2);
  expect(genDiff(json1, json2)).toEqual(expected);
});
