'use strict';

window.$ =
window.jQuery = require('jquery');

// Require Angular and dependencies
require('angular');
require('angular-animate');
require('angular-ui-router');


// Require templates
require('./templates');

// Require directives
require('./directives');

// Declare 'devnotes' module
angular.module('devnotes', [
  'ngAnimate',
  'ui.router',
  'devnotes.notes',
  'devnotes.directives'
]);

// Configure application
angular.module('devnotes').config(require('./config'));

angular.module('devnotes')
  .controller('HomeController', require('./home-controller'));

// Bootstrap 'devnots' module to `document`
angular.bootstrap(document, ['devnotes']);
