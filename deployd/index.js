'use strict';
var path = require('path');
var util = require('util');
var yeoman = require('yeoman-generator');


module.exports = Generator;

function Generator() {
  yeoman.generators.Base.apply(this, arguments);
}

util.inherits(Generator, yeoman.generators.Base);

Generator.prototype.setupDeployd = function setupDeployd() {
	this.sourceRoot(path.join(__dirname, '../templates/deployd'));
  this.directory('root', '.', true);
  this.copy('type-loader.js','./node_modules/deployd/lib/type-loader.js')

};
