// AME Consulting v2 — Main JS

document.addEventListener('DOMContentLoaded', function() {
  // Mobile nav toggle
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');
  const closeBtn = document.getElementById('mobile-nav-close');

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', function() {
      mobileNav.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }

  if (closeBtn && mobileNav) {
    closeBtn.addEventListener('click', function() {
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  // Close mobile nav on link click
  if (mobileNav) {
    mobileNav.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // Scroll-based nav background
  const nav = document.getElementById('main-nav');
  if (nav) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        nav.classList.add('shadow-md');
      } else {
        nav.classList.remove('shadow-md');
      }
    });
  }
});
