var randomBytes = require('../');
var test = require('tape');
var isFunction = require('lodash.isfunction');
var every = require('lodash.every');
var isString = require('lodash.isstring');

test('exports a function', function(t) {
  t.plan(1);
  t.ok(isFunction(randomBytes));
});

test('returns string of proper length', function(t) {
  t.plan(1);
  var array = new Array(1000);
  t.ok(every(array, function() {
    var bytes = randomBytes(5);
    return isString(bytes) && bytes.length === 5;
  }));
});

test('returns empty string when given no length', function(t) {
  t.plan(1);
  var array = new Array(1000);
  t.ok(every(array, function() {
    var bytes = randomBytes();
    return isString(bytes) && !bytes.length;
  }));
});