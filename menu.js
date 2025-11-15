function toggleMenu() {
    const menu = document.getElementById("mobileMenu");

    // Toggle
    menu.classList.toggle("open");

    // Prevent background from blocking clicks
    if (menu.classList.contains("open")) {
        menu.style.pointerEvents = "auto";
    } else {
        menu.style.pointerEvents = "none";
    }
}
