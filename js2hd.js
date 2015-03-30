#!/usr/bin/env node

/**
 * Module dependencies.
 */

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
  if (hodor.search(".js") > 0) { // user entered a .js file
    console.log('HODOR: '.bold.cyan + hodor.bold.white + ' => '.yellow + hodor.replace('.js', '.hd').bold.white);
    var text = fs.readFileSync(hodor).toString(); // the contents of the file
    convertCode(text);
  } else { // user entered something apart from a js file
    console.log('HODOR:'.bold.red + ' hodor hodor!'.red);
  }
}

function convertCode (text) {
  var outputFileName = hodor.replace(".js", ".hd");
  var hodorText = text;
  
  for (i = 0; i < legend.length; i++){
    var query = legend[i];
    var re    = new RegExp(query.search, 'g');

    hodorText = hodorText.replace(re, query.replace);
  }
  
  fs.writeFileSync(outputFileName, hodorText);  
}