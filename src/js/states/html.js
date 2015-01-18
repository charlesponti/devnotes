'use strict';

module.exports = function(stateProvider) {

  stateProvider
    .state('html', {
      url: '/html',
      templateUrl: 'pages/html.html'
    })
    .state('html.dom', {
      url: '/dom',
      templateUrl: 'notes/html/dom.html'
    })
    .state('html.performance', {
      url: '/performance',
      templateUrl: 'notes/html/performance.html'
    })
    .state('html.app-cache', {
      url: '/app-cache',
      templateUrl: 'notes/html/app-cache.html'
    });

  return stateProvider;
};
