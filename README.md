# Image Z
  [![Tests](https://github.com/descom-es/image-z/actions/workflows/tests.yaml/badge.svg)](https://github.com/descom-es/image-z/actions/workflows/tests.yaml)

Sharp wrapper that parses url parameters.

## Usage

ESM
```ts
import { ImageZ } from '@vgarciaf/image-z';
import { readFileSync } from 'fs';

const image = readFileSync('./src/__tests__/test.jpg').toString('base64');

const transformedImage = (await ImageZ.from(image).transform('w_100,h_100')).response();
```

CommonJS
```js
const { ImageZ } = require('@vgarciaf/image-z');
const { readFileSync } = require('fs');

async function main() {
  const image = readFileSync('./src/__tests__/test.jpg').toString('base64');

  const transformedImage = (await ImageZ.from(image).transform('w_100,h_100')).response();
}

main();
```