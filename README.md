# Gendiff

### Hexlet tests and linter status:
[![Hexlet Check Status](https://github.com/VadimFilimonov/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/VadimFilimonov/frontend-project-lvl2/actions/workflows/hexlet-check.yml)
[![Linter Status](https://github.com/VadimFilimonov/frontend-project-lvl2/workflows/linter/badge.svg)](https://github.com/VadimFilimonov/frontend-project-lvl2/actions/workflows/linter.yml)
[![Test Status](https://github.com/VadimFilimonov/frontend-project-lvl2/workflows/test/badge.svg)](https://github.com/VadimFilimonov/frontend-project-lvl2/actions/workflows/test.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/097dfbb42f2c28291578/maintainability)](https://codeclimate.com/github/VadimFilimonov/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/097dfbb42f2c28291578/test_coverage)](https://codeclimate.com/github/VadimFilimonov/frontend-project-lvl2/test_coverage)

## Description

Gendiff – a program that detects the difference between two data structures.

## Installation

```sh
$ git clone git@github.com:VadimFilimonov/frontend-project-lvl2.git
$ make install
$ npm link
```

## Usage

```sh
$ gendiff [options] <filepath1> <filepath2>
```

Options:
- `-V, --version` output the version
- `-f, --format [type]` output format
  - `[type]` - stylish, plain, json
- `-h, --help` output usage information

`<filepath>` - path to json or yaml file

[![asciicast](https://asciinema.org/a/SHE7Fbi3crc3PSSzjcAYV4kx3.svg)](https://asciinema.org/a/SHE7Fbi3crc3PSSzjcAYV4kx3)

## Examples

### Flat JSON

file1.json

```json
{
  "host": "hexlet.io",
  "timeout": 50,
  "proxy": "123.234.53.22",
  "follow": false
}
```

file2.json

```json
{
  "timeout": 20,
  "verbose": true,
  "host": "hexlet.io"
}
```

[![asciicast](https://asciinema.org/a/2qiRWpoKwv7fqI8epcvUt3OJR.svg)](https://asciinema.org/a/2qiRWpoKwv7fqI8epcvUt3OJR)
