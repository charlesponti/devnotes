'use strict';

// Require navigation controls
require('./components/nav');

// Require Angular and dependencies
require('angular');
require('angular-ui-router');

// Require templates
require('./templates');

// Require directives
require('./directives');

// Declare 'devnotes' module
angular.module('devnotes', [
  'ui.router',
  'devnotes.notes',
  'devnotes.directives'
]);

// Configure application
angular.module('devnotes').config(require('./config'));

// Add run
angular.module('devnotes').run(require('./run'));

// Bootstrap 'devnots' module to `document`
angular.bootstrap(document, ['devnotes']);
