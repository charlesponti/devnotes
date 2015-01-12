'use strict';

module.exports = function(stateProvider) {

  stateProvider
    .state('html', {
      url: '/html',
      templateUrl: 'pages/html.html'
    });

  return stateProvider;
};
