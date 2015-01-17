'use strict';

/**
 * @ngInject
 */
module.exports = function($rootScope, $timeout) {
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
};
