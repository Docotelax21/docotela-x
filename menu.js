/* menu.js — Docotela X Option 3 glass blur menu behaviour (shared) */
(() => {
  const hb = document.getElementById('docoHamburger');
  const menu = document.getElementById('docoSideMenu');
  if(!hb || !menu) return;

  function setOpen(open){
    if(open){
      menu.classList.add('menu-open');
      menu.setAttribute('aria-hidden','false');
      hb.setAttribute('aria-expanded','true');
      document.documentElement.style.overflow = 'hidden';
      // focus first link
      const f = menu.querySelector('a[role="menuitem"]') || menu.querySelector('a');
      if(f) f.focus();
    } else {
      menu.classList.remove('menu-open');
      menu.setAttribute('aria-hidden','true');
      hb.setAttribute('aria-expanded','false');
      document.documentElement.style.overflow = '';
      hb.focus();
    }
  }

  hb.addEventListener('click', (e) => {
    e.stopPropagation();
    setOpen(!menu.classList.contains('menu-open'));
  });

  // close clicking outside
  document.addEventListener('click', (e) => {
    if(menu.classList.contains('menu-open') && !menu.contains(e.target) && e.target !== hb){
      setOpen(false);
    }
  });

  // ESC to close
  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape' && menu.classList.contains('menu-open')) setOpen(false);
  });

  // close when a link is clicked
  menu.addEventListener('click', (e) => {
    const a = e.target.closest('a');
    if(!a) return;
    setOpen(false);
  });
})();
