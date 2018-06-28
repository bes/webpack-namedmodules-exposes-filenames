# POC: Webpack optimization.namedModules exposes alias module name, and internal filenames

When using webpack resolve.alias together with namedModules, the alias module name and the
referenced filenames are readable in the resulting js files, even if Uglify/production mode is enabled.

# build1 - namedModules enabled, dynamic chunk:

It's easy to see that the alias module name and the filename is clearly readable.

```
(window.webpackJsonp=window.webpackJsonp||[]).push([["dynamic-chunk"],{"./aliasmodule/dynamic.js":function(n,c,a){"use strict";a.r(c),a.d(c,"CONSTANT",function(){return o});const o="I am a constant"}}]);
```

# build2 - namedModules disabled, dynamic chunk:

Aliases and filenames are not exposed

```
(window.webpackJsonp=window.webpackJsonp||[]).push([["dynamic-chunk"],{2:function(n,c,o){"use strict";o.r(c),o.d(c,"CONSTANT",function(){return t});const t="I am a constant"}}]);
```
