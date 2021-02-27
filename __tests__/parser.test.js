/* eslint-disable no-underscore-dangle */
import path from 'path';
import { fileURLToPath } from 'url';
import parser from '../src/parser';
import readFile from '../src/readFile';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('JSON is correct', () => {
  const filepath = getFixturePath('file1.json');
  const expected = JSON.parse(readFile(filepath));
  expect(parser(filepath)).toEqual(expected);
});

test('YAML is correct', () => {
  const filepath = getFixturePath('file1.yml');
  const filepathExpected = getFixturePath('file1.json');
  const expected = JSON.parse(readFile(filepathExpected));
  expect(parser(filepath)).toEqual(expected);
});
