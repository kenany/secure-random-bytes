const randomOctet = require('secure-random-octet');

/**
 * Generates a secure random byte string of a specified length.
 *
 * @param {number} length String length.
 * @returns {string} String of random bytes.
 */
function randomBytes(length) {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += String.fromCharCode(randomOctet());
  }
  return result;
}

module.exports = randomBytes;
