'use strict';

/**
 * @ngInject
 */
module.exports = function($templateCache) {

  return {

    restrict: 'E',

    replace: false,

    transclude: true,

    template: '<nav class="side" ng-transclude></nav>',

    link: require('./link'),

    controllerAs: 'navbar'

  };

};
