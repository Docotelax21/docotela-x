// menu.js - minimal and reliable
(function(){
  function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    if (!menu) return;
    menu.classList.toggle('open');
    // aria
    const expanded = menu.classList.contains('open');
    document.querySelectorAll('.hamburger').forEach(h => h.setAttribute('aria-expanded', expanded ? 'true' : 'false'));
    menu.setAttribute('aria-hidden', expanded ? 'false' : 'true');
  }

  // attach click handlers for any hamburger
  document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.hamburger').forEach(btn=>{
      btn.addEventListener('click', toggleMenu);
    });

    // close menu if clicking outside
    document.addEventListener('click', function(e){
      const menu = document.getElementById('mobileMenu');
      if (!menu || !menu.classList.contains('open')) return;
      const isInside = menu.contains(e.target) || Array.from(document.querySelectorAll('.hamburger')).some(b => b.contains(e.target));
      if (!isInside) menu.classList.remove('open');
    });

    // close menu when menu link clicked (so it navigates cleanly)
    document.addEventListener('click', function(e){
      if (e.target.tagName === 'A' && e.target.closest('#mobileMenu')) {
        const menu = document.getElementById('mobileMenu');
        if (menu) menu.classList.remove('open');
      }
    });
  });
})();
