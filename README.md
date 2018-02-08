[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/iotaeco/iota-pico-pow-js/master/LICENSE) [![Build Status](https://travis-ci.org/iotaeco/iota-pico-pow-js.svg?branch=master)](https://travis-ci.org/iotaeco/iota-pico-pow-js) [![NSP Status](https://nodesecurity.io/orgs/iotaeco/projects/1fcb4e52-e85f-4bc9-9a9a-7523694cd3d5/badge)](https://nodesecurity.io/orgs/iotaeco/projects/1fcb4e52-e85f-4bc9-9a9a-7523694cd3d5)

# IOTA Pico Framework Proof Of Work JavaScript

## Introduction

The IOTA Pico Framework is intended to be a multi-layered set of object oriented JavaScript libraries.

Each layer is fully abstracted allowing you to replace components with your own implementations very easily.

The libraries are written in TypeScript so are all strongly typed. The modules are generated as ES6 so you may need to transpile them when including them for use in older JavaScript eco-systems. The code will run without transpilation in all modern browsers and when used by NodeJs.

## Installation

```shell
npm install @iota-pico/pow-js
```

## POW JavaScript

The library contains the Ccurl proof of work algorithm in plain JavaScript.

## Platform Abstraction Layers (PALs)

* Browser PAL [@iota-pico/pal-browser](https://github.com/iotaeco/iota-pico-pal-browser)
* NodeJS PAL [@iota-pico/pal-browser](https://github.com/iotaeco/iota-pico-pal-nodejs)

## API Documentation

Documentation for the code can be found in [docs](./docs/README.md) folder.

## Tutorials

Some tutorials can be found in the following repo [@iota-pico/tutorials](https://github.com/iotaeco/tutorials)

## Examples

There is example code using all the functionality of the libraries for the following platforms and languages.

* Browser Examples written in JavaScript [@iota-pico/examples-browser-js](https://github.com/iotaeco/iota-pico-examples-browser-js)
* Browser Examples written in TypeScript [@iota-pico/examples-browser-ts](https://github.com/iotaeco/iota-pico-examples-browser-ts)
* NodeJS CLI Examples written in JavaScript [@iota-pico/examples-nodejs-js](https://github.com/iotaeco/iota-pico-examples-nodejs-js)
* NodeJS CLI Examples written in TypeScript [@iota-pico/examples-nodejs-ts](https://github.com/iotaeco/iota-pico-examples-nodejs-ts)
