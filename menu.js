/* menu.js — Docotela X cinematic B1 menu behaviour (shared) */
(() => {
  const hb = document.getElementById('docoHamburger') || document.querySelector('.hamburger');
  const menu = document.getElementById('docoSideMenu');
  if(!hb || !menu) return;

  // toggle open/close
  function toggleMenu(){
    const open = menu.classList.toggle('menu-open');
    menu.setAttribute('aria-hidden', !open);
    hb.setAttribute('aria-expanded', String(open));
    // lock scroll when open
    document.documentElement.style.overflow = open ? 'hidden' : '';
    // set focus to first link when opened
    if(open){
      const f = menu.querySelector('a[role="menuitem"]') || menu.querySelector('a');
      if(f) f.focus();
    } else {
      hb.focus();
    }
  }

  // click hamburger
  hb.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // close when clicking outside menu
  document.addEventListener('click', (e) => {
    if(!menu.classList.contains('menu-open')) return;
    if(!menu.contains(e.target) && e.target !== hb) {
      menu.classList.remove('menu-open');
      menu.setAttribute('aria-hidden', 'true');
      hb.setAttribute('aria-expanded', 'false');
      document.documentElement.style.overflow = '';
    }
  });

  // allow ESC to close
  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape' && menu.classList.contains('menu-open')) {
      menu.classList.remove('menu-open');
      menu.setAttribute('aria-hidden', 'true');
      hb.setAttribute('aria-expanded', 'false');
      document.documentElement.style.overflow = '';
      hb.focus();
    }
  });

  // Close menu when a link is clicked (so navigation happens cleanly on mobile)
  menu.addEventListener('click', (e) => {
    const a = e.target.closest('a');
    if(!a) return;
    menu.classList.remove('menu-open');
    menu.setAttribute('aria-hidden', 'true');
    hb.setAttribute('aria-expanded', 'false');
    document.documentElement.style.overflow = '';
  });

})();
