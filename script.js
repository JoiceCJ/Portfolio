//typing animation
window.addEventListener("load", function () {
    const loader = document.getElementById("loader");

    if (loader) {
        setTimeout(() => {
            loader.classList.add("hide");

            setTimeout(() => {
                loader.style.display = "none";
            }, 1200);
        }, 3200);
    }
});
//Dark and light mode
const themeToggle = document.getElementById("theme-toggle");
let theme = localStorage.getItem("theme") || "dark";
document.documentElement.setAttribute("data-theme", theme);

function updateIcon() {
    if (!themeToggle) return;

    if (theme === "dark") {
        themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
        themeToggle.setAttribute("aria-label", "Switch to light mode");
    } else {
        themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
        themeToggle.setAttribute("aria-label", "Switch to dark mode");
    }
}

updateIcon();
if (themeToggle) {
    themeToggle.addEventListener("click", function () {
        theme = theme === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
        updateIcon();
    });
}
//mobile menu
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("mobile-menu");
const closeMenu = document.getElementById("close-menu");
const menuLinks = document.querySelectorAll(".menu a");

function openMenu() {
    menu.classList.add("active");
    hamburger.setAttribute("aria-expanded", "true");
}

function hideMenu() {
    menu.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
}

if (hamburger && menu && closeMenu) {
    hamburger.addEventListener("click", openMenu);
    closeMenu.addEventListener("click", hideMenu);
    menuLinks.forEach((link) => {
        link.addEventListener("click", hideMenu);
    });
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            hideMenu();
        }
    });
}
