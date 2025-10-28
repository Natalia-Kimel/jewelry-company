const navMenu = document.querySelectorAll(".burger_menu");
const button = document.querySelectorAll(".burger-button")[0];
const body = document.body;

if (navMenu) {
    button.addEventListener("click", () => {
        navMenu.forEach(function (menu) {
            menu.classList.toggle("active");
            body.classList.toggle('no-scroll');
        });
    });

    navMenu.forEach(function (menu) {
        menu.addEventListener("click", () => {
            menu.classList.remove("active");
            body.classList.remove('no-scroll');
        });
    });
}