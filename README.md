# Compare Versions

[![Build Status](https://travis-ci.org/elliotttf/version-comparison.svg)](https://travis-ci.org/elliotttf/version-comparison)

This utility will compare two version strings to determine which is larger or if the strings
are equivalent.

## Usage

```jvascript
var compare = require('version-comparison');
compare('v1', '1.0');  //  0
compare('1.0.1', '1'); //  1
compare('1', '2')      // -1
```
