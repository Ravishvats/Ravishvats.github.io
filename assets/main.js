// Opens and closes the phone menu. The desktop menu is always visible.
(function () {
  var nav = document.querySelector('.site-nav');
  var toggle = document.querySelector('.menu-toggle');
  if (!nav || !toggle) return;

  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });

  // Close the menu after choosing a page.
  nav.addEventListener('click', function (event) {
    if (event.target.closest('a')) {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open menu');
    }
  });
})();
