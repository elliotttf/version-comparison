'use strict';

const semver = require('semver');
const toSemver = require('./toSemver');

/**
 * Compares two version strings by first converting them to semvers.
 *
 * @param {string} left
 *   The left string to compare.
 * @param {string} right
 *   The right string to compare.
 *
 * @return {int}
 *   - -1 if the left string is less than the right string.
 *   - 0 if the left string is equal to the right string.
 *   - 1 if the left string is greater than the right string.
 *
 * @throws {Error}
 *   If either of the version strings could not be compared or are missing.
 */
module.exports = (left, right) => {
  if ((left !== 0 && !left) || (right !== 0 && !right)) {
    throw new Error('You must provide both a left and right version string.');
  }

  const sLeft = toSemver(left);
  const sRight = toSemver(right);

  if (semver.gt(sLeft, sRight)) {
    return 1;
  }
  else if (semver.lt(sLeft, sRight)) {
    return -1;
  }

  return 0;
};

