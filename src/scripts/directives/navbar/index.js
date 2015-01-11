'use strict';

/**
 * @ngInject
 */
module.exports = function($templateCache) {

  return {

    restrict: 'E',

    replace: true,

    template: $templateCache.get('components/navbar.html'),

    link: require('./link'),

    controllerAs: 'navbar'

  };

};
