var compare = require('../lib/compare');

var assertCompare = function (test, left, right, title) {
  test.expect(4);

  test.doesNotThrow(function () {
    compare(left, left);
  }, 'Valid version string treated as invalid.');

  test.equal(compare(left, left), 0, title + ' strings not equal.');
  test.equal(compare(left, right), -1, title + ' left string not less than.');
  test.equal(compare(right, left), 1, title + ' right string not greater than.');

  test.done();
};

module.exports = {
  // Basic semvers.
  compareBasic: function (test) {
    assertCompare(test, '1.0.0', '2.0.0', 'Basic verson');
  },

  // Complex semvers.
  compareComplex: function (test) {
    assertCompare(test, '1.0.0-alpha1', '1.0.0-alpha2', 'Complex verson');
  },

  // Dirty semvers.
  compareDirty: function (test) {
    assertCompare(test, 'v1.0.0', '=v2.0.0', 'Dirty verson');
  },

  // Incomplete semver, one frag.
  compareIncompleteSingle: function (test) {
    assertCompare(test, 'v1', 'v2', 'Incomplete single fragment');
  },

  // Incomplete semver, one frag, bare.
  compareIncompleteSingleBare: function (test) {
    assertCompare(test, '1', '2', 'Incomplete single bare fragment');
  },

  // Incomplete semver, one frag.
  compareIncompleteSingleComplex: function (test) {
    assertCompare(test, 'v1-alpha1', 'v1-alpha2', 'Incomplete complex single fragment');
  },

  // Incomplete semver, two frags.
  compareIncompleteDouble: function (test) {
    assertCompare(test, 'v1.0', 'v1.1', 'Incomplete double fragments');
  },

  // Incomplete semver, two frags.
  compareIncompleteDoubleComplex: function (test) {
    assertCompare(test, 'v1.0-alpha1', 'v1.0-alpha2', 'Incomplete complex double fragment');
  },

  // Invalid version string.
  compareInvalid: function (test) {
    test.expect(1);

    test.throws(function () {
      compare('1', 'a');
    }, 'Invalid version string not detected.');

    test.done();
  },

  // Almost valid version string.
  compareAlmostvalid: function (test) {
    test.expect(1);

    test.throws(function () {
      compare('1.a', '1.b');
    }, 'Almost valid string not rejected.');

    test.done();
  },

  // Missing version string.
  compareMissing: function (test) {
    test.expect(1);

    test.throws(function () {
      compare('v1');
    }, 'Missing version string not detected.');

    test.done();
  }

};

