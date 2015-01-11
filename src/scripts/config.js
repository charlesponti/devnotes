'use strict';

var states = require('./states');

/**
 * @ngInject
 */
module.exports = function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  // Add CSS routes
  states.css($stateProvider);

  // Add Ruby routes
  states.ruby($stateProvider);

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home.html',
      controller: 'HomeController as HomeCtrl'
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
