'use strict';

angular.module('devnotes.directives', [])
  .directive({
    navbar: require('./navbar'),
    navSide: require('./nav-side'),
    listGroup: require('./list-group'),
    listItem: require('./list-item')
  });
