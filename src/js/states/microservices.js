'use strict';

module.exports = function(stateProvider) {

  stateProvider
    .state('microservices', {
      url: '/microservices',
      templateUrl: 'pages/microservices.html'
    })
    .state('microservices.introduction', {
      url: '/',
      templateUrl: 'notes/microservices/introduction.html'
    });

  return stateProvider;
};
