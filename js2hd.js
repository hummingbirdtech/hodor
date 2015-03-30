#!/usr/bin/env node

/**
 * Module dependencies.
 */

var program = require('commander'),
    pkginfo = require('pkginfo')(module, 'version'),
    colors  = require("colors");

program
  .version(module.exports.version, '-v, --version')
  .description('Hodor hodor hodor')
  .usage('COMMAND [ARGS] [OPTIONS]')
  .option('-H, --hodor <hodor>', 'Hodor hodor hodor hodor hodor hodor')
  .parse(process.argv);

var convert = function (file) {
  console.log(file);
};

if( typeof(program.hodor) === 'undefined') {
  console.log('HODOR: hodor hodor hodor!'.red);
} else {
  convert(program.hodor);
}