document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.navbar .mobile-menu-toggle');
    const mobileMenu = document.querySelector('.navbar .mobile-menu-items');

    toggleButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });   
});


const button = document.querySelector('#button');
const heading = document.querySelector('h1');

button.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  heading.classList.toggle('cyan');
});