'use strict';

window.$ =
window.jQuery = require('jquery');

// Require Angular and dependencies
require('angular');
require('angular-ui-router');

require('./templates');

angular.module('devnotes', [
  'devnotes.notes'
]);

angular.bootstrap(document, ['devnotes']);
