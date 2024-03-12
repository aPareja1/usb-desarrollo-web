const btn = document.querySelector('#menu-btn');
const menu = document.querySelector('#mobile-menu');

btn.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden')
    }

})