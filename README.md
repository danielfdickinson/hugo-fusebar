
# Introduction

Version 0.2.4

fusebar is a private website search for browsers using Fuse.js
(from krisk/Fuse on GitHub) in the backend. It's only runtime dependency
is Fuse.js (and search data).

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

## Developing / Building

``jest`` and ``eslint`` are required to be in the user's PATH when
developing or building fusebar.

### Development Server

While developing one can ``yarn run dev`` and browse to
<http://localhost:3000/> to do local testing / debugging of
the search code.

In development mode changes to the source are automatically webpacked
and injected into the browser(s).
