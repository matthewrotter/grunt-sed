// grunt-sed
// =========
// * GitHub: https://github.com/jharding/grunt-sed
// * Copyright (c) 2013 Jake Harding
// * Licensed under the MIT license.

module.exports = function(grunt) {
  var replace = require('replace')
    , _ = grunt.util._
    , log = grunt.log;

  grunt.registerMultiTask('sed', 'Search and replace.', function() {
    var data = this.data;

    if (!data.pattern) {
      log.error('Missing pattern property.');
      return;
    }

    if (_.isUndefined(data.replacement)) {
      log.error('Missing replacement property.');
      return;
    }

    var files = [];
    this.filesSrc.forEach(function(f) {
      files.push(f);
    });

    replace({
      regex: data.pattern
    , replacement: data.replacement
    , paths: files
    , recursive: data.recursive
    , quiet: grunt.option('verbose') ? false : true
    , silent: false
    , async: false
    });
  });
};
