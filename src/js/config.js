'use strict';

var states = require('./states');

/**
 * @ngInject
 */
module.exports = function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  // Add CSS states
  states.css($stateProvider);

  // Add Ruby states
  states.ruby($stateProvider);

  // Add HTML states
  states.html($stateProvider);

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home.html'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'about.html'
    })
    .state('tools', {
      url: '/tools',
      templateUrl: 'tools.html'
    });

};
