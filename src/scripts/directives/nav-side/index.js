'use strict';

/**
 * @ngInject
 */
module.exports = function($templateCache) {

  return {

    restrict: 'E',

    replace: false,

    transclude: true,

    template: $templateCache.get('components/nav-side.html'),

    link: require('./link'),

    controllerAs: 'navbar'

  };

};
