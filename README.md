# next-defaults-validate
> Get defaults by validate function.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
yarn add @jswork/next-defaults-validate
```

## usage
```js
import '@jswork/next-defaults-validate';

const target = {
  username: 'xiaoming',
  email: 'abc',
  other: 'value',
  nested: {
    company: {
      address: null
    }
  }
};

nx.defaultsValidate(target, {
  username: (value) => value.length > 3 ? null : 'anonymous',
  email: (value) => value.includes('@') ? null : 'example@email.com',
  'nested.company.address': (value) => value ? null : 'unknown'
});

// output: 
/*
{
  username: 'xiaoming',
  email: 'example@email.com',
  other: 'value',
  nested: {
    company: {
      address: 'unknown'
    }
  }
}
*/
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-defaults-validate/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-defaults-validate
[version-url]: https://npmjs.org/package/@jswork/next-defaults-validate

[license-image]: https://img.shields.io/npm/l/@jswork/next-defaults-validate
[license-url]: https://github.com/afeiship/next-defaults-validate/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-defaults-validate
[size-url]: https://github.com/afeiship/next-defaults-validate/blob/master/dist/next-defaults-validate.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-defaults-validate
[download-url]: https://www.npmjs.com/package/@jswork/next-defaults-validate
