'use strict';

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
  .controller('HomeController', require('./home-controller'))
  .run(function($rootScope, $timeout) {
    $rootScope.$on('$viewContentLoaded', function() {
      // Have to time out code highlighting because this event is fired
      // directly before the HTML is loaded into the DOM
      $timeout(function() {
        Array.prototype
          .slice
          .call(document.querySelectorAll('code'))
          .forEach(function(block) {
            return hljs.highlightBlock(block);
          });
      }, 5);
    });
  });

// Bootstrap 'devnots' module to `document`
angular.bootstrap(document, ['devnotes']);
