'use strict';

/**
 * @ngInject
 */
module.exports = function(scope, element, attrs) {
  var list = element.find('ul');
  var links = element.find('li, a');
  var toggle = element.find('button');

  function toggleList() {
      return list.toggleClass('open');
  }

  // Toggle 'open' class when mouse leaves <nav>
  element.on('mouseleave', function() {
    // Only toggle class if list has class
    if (list.hasClass('open')) {
      return list.removeClass('open');
    }
    return;
  });

  // Toggle 'open' class when link is clicked
  links.on('click', toggleList);

  // Toggle 'open' class when mouse leaves list
  list.on('mouseleave', toggleList);

  // Toggle 'open' class when Menu button is clicked
  return toggle.on('click', toggleList);
};
