(function () {
  'use strict';

  // iOS viewport fix: CSS vh/svh/dvh units are computed before the browser
  // knows the exact available height (URL bar affects it). Set --vh in pixels
  // from window.innerHeight, which is always accurate at JS execution time.
  function setVh() {
    document.documentElement.style.setProperty('--vh', window.innerHeight + 'px');
  }
  setVh();
  window.addEventListener('resize', setVh, { passive: true });

  // Mobile nav toggle — keeps aria-expanded AND aria-label in sync.
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-header nav');
  var body = document.body;

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      body.classList.toggle('nav-open', open);
    });

    // Close the menu if a nav link is activated (keyboard or tap).
    nav.addEventListener('click', function (e) {
      var target = e.target;
      if (target && target.tagName === 'A' && nav.classList.contains('open')) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open menu');
        body.classList.remove('nav-open');
      }
    });
  }

  // Scroll reveal. Falls back to showing everything if IO is unavailable.
  var reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      reveals.forEach(function (el) { observer.observe(el); });
    } else {
      reveals.forEach(function (el) { el.classList.add('visible'); });
    }
  }

  // Transparent header: add .scrolled class after a short scroll so the
  // homepage hero can flip into an opaque header style.
  var transparentHeader = document.querySelector('.site-header.header-transparent');
  if (transparentHeader) {
    var onScroll = function () {
      transparentHeader.classList.toggle('scrolled', window.scrollY > 80);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }
})();
