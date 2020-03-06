
# Introduction

fusebar is a dynamic search screen that uses PlainFuse (from
plainfuse project) in the backend.  It is written in ES5 and has only
the plainfuse dependency at runtime.

The only build dependency is 'concat' and that is for a lack of other
good (and simple) cross-platform options for combining files.

For testing there are more dependencies because we use Jest tests (from
upstream) to verify operation of `dist/fusebar.js`.

## Build Status

See [fusebar
STATUS](https://github.com/cshoredaniel/fusebar/blob/master/STATUS.md)
for the current build status.

## Installation

### As a Hugo Module

```shell
hugo mod get github.com/cshoredaniel/fusebar
```

### NPM

fusebar can be installed using NPM

```shell
$ npm install fusebar
```

