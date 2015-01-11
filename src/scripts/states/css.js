'use strict';

module.exports = function(stateProvider) {
  stateProvider
    .state('css', {
      url: '/css',
      templateUrl: 'pages/css.html'
    })
    .state('css.box-model', {
      url: '/box-model',
      templateUrl: 'notes/css/box-model.html'
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
    });

  return stateProvider;
};
