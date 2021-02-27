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

### Flat YML

file1.yml

```yml
host: hexlet.io,
timeout: 50,
proxy: 123.234.53.22,
follow: false
```

file2.yml

```yml
timeout: 20,
verbose: true,
host: hexlet.io
```

[![asciicast](https://asciinema.org/a/ZjiA9JK95r52QoteQAM6VZmYN.svg)](https://asciinema.org/a/ZjiA9JK95r52QoteQAM6VZmYN)

### Stylish format

file1.json

```json
{
  "common": {
    "setting1": "Value 1",
    "setting2": 200,
    "setting3": true,
    "setting6": {
      "key": "value",
      "doge": {
        "wow": ""
      }
    }
  },
  "group1": {
    "baz": "bas",
    "foo": "bar",
    "nest": {
      "key": "value"
    }
  },
  "group2": {
    "abc": 12345,
    "deep": {
      "id": 45
    }
  }
}
```

file2.json

```json
{
  "common": {
    "follow": false,
    "setting1": "Value 1",
    "setting3": null,
    "setting4": "blah blah",
    "setting5": {
      "key5": "value5"
    },
    "setting6": {
      "key": "value",
      "ops": "vops",
      "doge": {
        "wow": "so much"
      }
    }
  },
  "group1": {
    "foo": "bar",
    "baz": "bars",
    "nest": "str"
  },
  "group3": {
    "deep": {
      "id": {
        "number": 45
      }
    },
    "fee": 100500
  }
}
```

> Next examples have same json files

[![asciicast](https://asciinema.org/a/C73uM0p5AKiIpzlOqamFWlIfO.svg)](https://asciinema.org/a/C73uM0p5AKiIpzlOqamFWlIfO)

### Plain format

[![asciicast](https://asciinema.org/a/FRgMaymu03Dm6BiS8zOWYGJVH.svg)](https://asciinema.org/a/FRgMaymu03Dm6BiS8zOWYGJVH)

### JSON format

[![asciicast](https://asciinema.org/a/dpFO8fxrrA72T1aswCnTz5UhD.svg)](https://asciinema.org/a/dpFO8fxrrA72T1aswCnTz5UhD)
