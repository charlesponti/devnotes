'use strict';

var Prism = window.Prism;
var angular = require('angular');

module.exports = function() {
  return {
    restrict: 'E',

    transclude: true,

    template: "<pre><code ng-transclude></code></pre>",

    link: function(scope, element, attributes) {
      var code = element.find('code')[0];

      // Add language class to code element
      code.classList.add('language-'+attributes.language);

      if (attributes.language === 'html') {
        code.textContent = code.innerHTML;
      }

      // Highlight element code
      return element.ready(function() {
        return Prism.highlightElement(code);
      });
    }
  };
};
