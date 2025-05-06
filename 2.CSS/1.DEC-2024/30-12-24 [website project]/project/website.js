const menuIcon = document.getElementById('menu-icon');
const navMenu = document.getElementById('nav-menu');

menuIcon.addEventListener('click', () => {
navMenu.classList.toggle('open');
});

function openSubmenu(element) {
const submenu = element.nextElementSibling;
if (submenu) {
submenu.classList.toggle('open');
}
}