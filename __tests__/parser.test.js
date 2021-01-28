/* eslint-disable no-underscore-dangle */
import path from 'path';
import { fileURLToPath } from 'url';
import parser from '../src/parser';
import readFile from '../src/readFile';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

let expected;

beforeAll(async () => {
  const filepath = getFixturePath('file1.json');
  const file = readFile(filepath);
  expected = JSON.parse(file);
});

test('JSON is correct', () => {
  const filepath = getFixturePath('file1.json');
  expect(parser(filepath)).toEqual(expected);
});

test('YAML is correct', () => {
  const filepath = getFixturePath('file1.yml');
  expect(parser(filepath)).toEqual(expected);
});
