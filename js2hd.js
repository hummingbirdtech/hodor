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
  .usage('COMMAND [ARGS] [OPTIONS]')
  .option('-H, --hodor <hodor>', 'Hodor hodor hodor hodor hodor hodor')
  .parse(process.argv);

if( typeof(program.hodor) === 'undefined') {
  console.log('HODOR: hodor hodor hodor!'.red);
} else {
  if (program.hodor.search(".js") > 0) { // user entered a .js file
    console.log('HODOR: '.cyan + '\\-> '.white + program.hodor.white);
    var text = fs.readFileSync(program.hodor).toString(); // the contents of the file
    convertCode(text);
  } else { // user entered something apart from a js file
    console.log('HODOR: hodor hodor!'.red);
  }
}

function convertCode (text) {
  var outputFileName = program.hodor.replace(".js", ".hd");
  var hodorText = text;
  
  for (i = 0; i < legend.length; i++){
    var query = legend[i];
    var re    = new RegExp(query.search, 'g');
    
    hodorText = hodorText.replace(re, query.replace);
  }
  
  fs.writeFileSync (outputFileName, hodorText);  
}