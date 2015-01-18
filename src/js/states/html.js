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
    });

  return stateProvider;
};
