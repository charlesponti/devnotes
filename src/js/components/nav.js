(function() {
  'use strict';

  var find = document.querySelector.bind(document);

  var main = find('main');
  var header = find('.site-header');
  var navBtn = find('.site-header .toggle');
  var nav = find('.site-nav');

  function closeMenu() {
    header.classList.remove('open');
    nav.classList.remove('open');
    main.classList.remove('open');
  }

  function toggleMenu() {
    header.classList.toggle('open');
    nav.classList.toggle('open');
    main.classList.toggle('open');
  }

  navBtn.addEventListener('click', toggleMenu);
  main.addEventListener('click', closeMenu);
  nav.addEventListener('click', function(event) {
    if (/LI|A/.test(event.target.nodeName)) {
      return closeMenu();
    }
    return;
  });
})();
