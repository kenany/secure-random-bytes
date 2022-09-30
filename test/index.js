const test = require('tape');
const isFunction = require('lodash.isfunction');
const every = require('lodash.every');
const isString = require('lodash.isstring');

const randomBytes = require('../');

test('exports a function', (t) => {
  t.plan(1);
  t.ok(isFunction(randomBytes));
});

test('returns string of proper length', (t) => {
  t.plan(1);
  const array = new Array(1000);
  t.ok(every(array, () => {
    const bytes = randomBytes(5);
    return isString(bytes) && bytes.length === 5;
  }));
});

test('returns empty string when given no length', (t) => {
  t.plan(1);
  const array = new Array(1000);
  t.ok(every(array, () => {
    const bytes = randomBytes();
    return isString(bytes) && !bytes.length;
  }));
});
