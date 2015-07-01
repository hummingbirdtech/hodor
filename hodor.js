#!/usr/bin/env node

/**
 * Module dependencies.
 */

String.prototype.replaceAll = function(substring, replacement) {
  var result = '';
  var lastIndex = 0;

  while(true) {
    var index = this.indexOf(substring, lastIndex);
    if(index === -1) break;
    result += this.substring(lastIndex, index) + replacement;
    lastIndex = index + substring.length;
  }

  return result + this.substring(lastIndex);
};

var program = require('commander'),
    pkginfo = require('pkginfo')(module, 'version'),
    colors  = require("colors"),
    fs      = require('fs');

var legend = require('./legend'); // ./ means current directory, and don't need .js b/c all require files are js

program
  .version(module.exports.version, '-v, --version')
  .description('Hodor hodor hodor')
  .parse(process.argv);

var hodor = program.args[0];

if( typeof(hodor) === 'undefined') {
  console.log('HODOR:'.bold.red + ' hodor hodor hodor!'.red);
} else {
  if (hodor.search(".hd") > 0) { // user entered a .hd file
    console.log('HODOR: '.bold.cyan + '\\-> '.white + hodor.white);
    var text = fs.readFileSync(hodor).toString(); // the contents of the file
    convertCode(text);
  } else { // user entered something apart from a hd file
    console.log('HODOR:'.bold.red + ' hodor hodor!'.red);
  }
}

function convertCode (text) {
  var hodorText = text;
  
  for (i = (legend.length - 1); i >= 0; i--){
    var query = legend[i];

    hodorText = hodorText.replaceAll(query.replace, query.search);
  }

  hodorText = hodorText.replace(/hello world/ig, 'HODOR');

  eval(hodorText);
}