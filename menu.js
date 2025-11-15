// simple menu toggle + close on link click
(function(){
  const hb = document.querySelectorAll('.hamburger');
  const menus = document.querySelectorAll('#mobileMenu');

  function toggle(){
    menus.forEach(m=>{
      m.classList.toggle('open');
      m.setAttribute('aria-hidden', m.classList.contains('open') ? 'false' : 'true');
    });
    hb.forEach(b=>{
      const expanded = b.getAttribute('aria-expanded') === 'true';
      b.setAttribute('aria-expanded', (!expanded).toString());
    });
  }

  hb.forEach(b=>b.addEventListener('click', toggle));

  // close if clicking a menu link (so page navigates and menu closes)
  document.addEventListener('click', (ev)=>{
    if(ev.target.tagName === 'A' && ev.target.closest('.mobile-menu')){
      menus.forEach(m=>m.classList.remove('open'));
      hb.forEach(b=>b.setAttribute('aria-expanded','false'));
    }
  });

  // close menu if clicking outside when open
  document.addEventListener('click', (ev)=>{
    const open = Array.from(menus).some(m => m.classList.contains('open'));
    if(!open) return;
    // if click is inside hamburger or menu, do nothing
    if (ev.target.closest('.hamburger') || ev.target.closest('.mobile-menu')) return;
    // otherwise close
    menus.forEach(m=>m.classList.remove('open'));
    hb.forEach(b=>b.setAttribute('aria-expanded','false'));
  });
})();
