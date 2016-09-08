# Compare Versions

[![Build Status](https://travis-ci.org/elliotttf/version-comparison.svg?branch=master)](https://travis-ci.org/elliotttf/version-comparison)
[![Coverage Status](https://coveralls.io/repos/elliotttf/version-comparison/badge.svg?branch=master)](https://coveralls.io/r/elliotttf/version-comparison?branch=master)

This utility will compare two version strings to determine which is larger or if the strings
are equivalent.

Note: this utility makes a best effort at comparing _sane_ version strings but is not meant
to be a catchall.

## Usage

```jvascript
var compare = require('version-comparison');
compare('v1', '1.0');  //  0
compare('1.0.1', '1'); //  1
compare('1', '2');     // -1
```
