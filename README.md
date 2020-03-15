
# Introduction

fusebar is a Private website search for browsers using Fuse.js
(from krisk/Fuse on GitHub) in the backend. It's only runtime dependency
is Fuse.js (and search data).

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

## Development Server

While developing one can ``npm run server`` and browse to
<http://localhost:3000/> to do local testing / debugging of
the search code.
