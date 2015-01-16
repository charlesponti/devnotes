'use strict';

module.exports = function(stateProvider) {
  stateProvider
    .state('css', {
      url: '/css',
      templateUrl: 'pages/css.html'
    })
    .state('css.animation', {
      url: '/animation',
      templateUrl: 'notes/css/animation.html',
    })
    .state('css.box-model', {
      url: '/box-model',
      templateUrl: 'notes/css/box-model.html'
    })
    .state('css.smacss', {
      url: '/smacss',
      templateUrl: 'notes/css/smacss.html',
    })
    .state('css.naming', {
      url: '/naming',
      templateUrl: 'notes/css/naming.html',
    })
    .state('css.transform', {
      url: '/transform',
      templateUrl: 'notes/css/transform.html',
    })
    .state('css.transition', {
      url: '/transition',
      templateUrl: 'notes/css/transition.html',
    })
    .state('css.position', {
      url: '/position',
      templateUrl: 'notes/css/position.html',
    })
    .state('css.media-queries', {
      url: '/media-queries',
      templateUrl: 'notes/css/media-queries.html',
    })
    .state('css.methodology', {
      url: '/methodology',
      templateUrl: 'notes/css/methodology.html',
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
