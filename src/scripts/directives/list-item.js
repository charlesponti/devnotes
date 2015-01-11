'use strict';

/**
 * @ngInject
 */
module.exports = function() {

  return {

    restrict: 'E',

    requires: '^listGroup',

    template: '<li class="list-group-item" ng-transclude></li>',

    transclude: true,

    controller: function() {

    }

  };

};
