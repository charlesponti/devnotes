'use strict';

/**
 * @ngInject
 */
module.exports = function() {

  return {

    restrict: 'E',

    template: '<ul class="list-group" ng-transclude></ul>',

    transclude: true,

    controller: function() {

    }

  };

};
