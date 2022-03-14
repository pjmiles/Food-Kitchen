const navItems = document.querySelector(".nav_items");
const openMenu = document.querySelector(".openMenu");
const closeMenu = document.querySelector(".closeMenu");

openMenu.addEventListener('click', show)
closeMenu.addEventListener('click', close)

function show (){
    navItems.style.display = 'flex';
    navItems.style.top = '0';
}

function close (){
    navItems.style.top = '-100%'
}