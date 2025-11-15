// menu.js - handles hamburger open/close and link navigation
(function(){
  const hbButtons = Array.from(document.querySelectorAll('.hamburger'));
  const sideMenus = Array.from(document.querySelectorAll('.doco-side-menu'));

  function toggleMenu(e){
    // If multiple pages, ensure all side menus toggled consistently
    sideMenus.forEach(m=>{
      const willOpen = !m.classList.contains('open');
      if(willOpen){
        m.classList.add('open');
        m.setAttribute('aria-hidden','false');
      } else {
        m.classList.remove('open');
        m.setAttribute('aria-hidden','true');
      }
    });
    hbButtons.forEach(b=>{
      const expanded = b.getAttribute('aria-expanded') === 'true';
      b.setAttribute('aria-expanded', (!expanded).toString());
    });
  }

  hbButtons.forEach(b=>{
    b.addEventListener('click', toggleMenu);
  });

  // close menu when user clicks outside
  document.addEventListener('click', (ev)=>{
    const clicked = ev.target;
    const menuOpen = sideMenus.some(m=>m.classList.contains('open'));
    if(!menuOpen) return;
    // if click is inside any menu or hamburger, do nothing
    if (hbButtons.some(btn=>btn.contains(clicked)) || sideMenus.some(m=>m.contains(clicked))) return;
    // else close
    sideMenus.forEach(m=>m.classList.remove('open'));
    hbButtons.forEach(b=>b.setAttribute('aria-expanded','false'));
  });

  // ensure menu links work and close the side menu on click
  document.addEventListener('click', (ev)=>{
    if(ev.target.tagName === 'A' && ev.target.closest('.doco-side-menu')){
      // small defer so page can navigate
      sideMenus.forEach(m=>m.classList.remove('open'));
      hbButtons.forEach(b=>b.setAttribute('aria-expanded','false'));
    }
  });
})();
