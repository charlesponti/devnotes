(function() {
  'use strict';

  var find = document.querySelector.bind(document);

  var main = find('main');
  var header = find('.site-header');
  var notesBtn = find('.site-header .toggle');
  var notesNav = find('.notes-nav');

  function closeMenu() {
    header.classList.remove('open');
    notesNav.classList.remove('open');
  }

  function toggleMenu() {
    header.classList.toggle('open');
    notesNav.classList.toggle('open');
  }

  notesBtn.addEventListener('click', toggleMenu);
  main.addEventListener('click', closeMenu);
  notesNav.addEventListener('click', function(event) {
    if (/LI|A/.test(event.target.nodeName)) {
      return closeMenu();
    }
    return;
  });
})();
