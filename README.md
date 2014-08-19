# secure-random-bytes

Retrieve a secure random byte string of a specified length.

## Example

``` javascript
var randomBytes = require('secure-random-bytes');

randomBytes(10);
// => 'ÊïÜsóÐ\u0006\u0016mÏ'
```

## Installation

``` bash
$ npm install secure-random-bytes
```

## API

``` javascript
var randomBytes = require('secure-random-bytes');
```

### `randomBytes(length)`

Returns a _String_ (whose length is `length`) of random bytes.