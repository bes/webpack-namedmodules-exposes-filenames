# POC: Webpack optimization.namedModules exposes alias module name, and internal filenames

When using webpack resolve.alias together with namedModules, the alias module name and the
referenced filenames are readable in the resulting js files, even if Uglify/production mode is enabled.