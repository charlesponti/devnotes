'use strict';

/**
 * @ngInject
 */
module.exports = function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home.html',
      controller: 'HomeController as HomeCtrl'
    })
    .state('css', {
      url: '/css',
      templateUrl: 'pages/css.html'
    })
    .state('css.smacss', {
      url: '/smacss',
      templateUrl: 'notes/css/smacss.html',
    })
    .state('css.position', {
      url: '/position',
      templateUrl: 'notes/css/position.html',
    })
    .state('css.bem', {
      url: '/bem',
      templateUrl: 'notes/css/bem.html',
    })
    .state('css.oocss', {
      url: '/oocss',
      templateUrl: 'notes/css/oocss.html',
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
