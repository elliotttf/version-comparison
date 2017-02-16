'use strict';

const semver = require('semver');
/**
 * Helper method to convert a version string to a semver string for comparison.
 *
 * @param {string} string
 *   The string to convert.
 *
 * @return {string}
 *   A semver string from string.
 *
 * @throws {Error}
 *   Thrown if the string could not be converted to a semver.
 */
const toSemver = (string) => {
  if (semver.valid(string)) {
    return string;
  }

  // Try cleaning the string just in case.
  const cleanString = semver.clean(string);
  if (semver.valid(cleanString)) {
    return cleanString;
  }

  // Do we even have a number?
  if (!string.match(/\d+/)) {
    throw new Error(`Unable to compare version string: ${string}`);
  }

  // Special case for bare numbers.
  if (string.match(/^\d+$/)) {
    return toSemver(`${string}.0.0`);
  }

  // Split the version string on dots, and try to convert to a semver.
  const versionFrags = string.split(/(\d+)\./).filter(frag => frag !== '' && frag.match(/^\d/));

  if (versionFrags.length === 0) {
    return toSemver(string.replace(/(\d+)/, '$1.0.0'));
  }
  else if (versionFrags.length === 2) {
    let stillCollecting = true;
    const replace = versionFrags.join('.').split(/([^\d]+)/).filter((frag) => {
      if (!stillCollecting) {
        return false;
      }

      stillCollecting = (frag === '.' || frag.match(/^\d+$/));
      return stillCollecting;
    }).join('');
    return toSemver(string.replace(replace, `${replace}.0`));
  }

  throw new Error(`Unable to compare version string: ${string}`);
};

module.exports = toSemver;
