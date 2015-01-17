'use strict';

module.exports = function(stateProvider) {
  stateProvider
    .state('ruby', {
      url: '/ruby',
      templateUrl: 'pages/ruby.html'
    })
    .state('ruby.arrays', {
      url: '/arrays',
      templateUrl: 'notes/ruby/arrays.html'
    })
    .state('ruby.classes', {
      url: '/classes',
      templateUrl: 'notes/ruby/classes.html',
    })
    .state('ruby.comparators', {
      url: '/comparators',
      templateUrl: 'notes/ruby/comparators.html',
    })
    .state('ruby.conditionals', {
      url: '/conditionals',
      templateUrl: 'notes/ruby/conditionals.html',
    })
    .state('ruby.hash', {
      url: '/hash',
      templateUrl: 'notes/ruby/hash.html',
    })
    .state('ruby.iteration', {
      url: '/iteration',
      templateUrl: 'notes/ruby/iteration.html',
    })
    .state('ruby.methods', {
      url: '/methods',
      templateUrl: 'notes/ruby/methods.html',
    })
    .state('ruby.modules', {
      url: '/modules',
      templateUrl: 'notes/ruby/modules.html',
    })
    .state('ruby.strings', {
      url: '/strings',
      templateUrl: 'notes/ruby/strings.html',
    })
    .state('ruby.variables', {
      url: '/variables',
      templateUrl: 'notes/ruby/variables.html',
    });

  return stateProvider;
};
