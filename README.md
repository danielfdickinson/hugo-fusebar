# Fusebar

## Introduction

Version 0.2.8

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
npm install fusebar
```

## Developing / Building

Make sure NPM package `yarn-cli` is installed and in your PATH

```shell
yarn install -D
```

This will install your development dependencies (including jest and eslint).
You need to make sure `.node_modules/.bin` is in your PATH

### Development Server

While developing one can ``yarn run dev`` and browse to
<http://localhost:3000/> to do local testing / debugging of
the search code.

In development mode changes to the source are automatically bundled using rollup
and injected into the browser(s).

## License

   fusebar - Private website search for browsers using Fuse.js as backend
   Copyright 2020 Daniel F. Dickinson <cshored@thecshore.com>

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
