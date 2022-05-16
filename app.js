const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", function() {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
});

document.querySelector("#contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    e.target.elements.name.value = "";
    e.target.elements.email.value = "";
    e.target.elements.message.value = "";
});