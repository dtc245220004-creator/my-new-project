document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");

    menuIcon.addEventListener("click", function () {
        const isActive = navLinks.classList.toggle("active");
        menuIcon.setAttribute("aria-expanded", isActive ? "true" : "false");
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
            menuIcon.setAttribute("aria-expanded", "false");
        });
    });
});
