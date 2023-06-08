let navBar = document.querySelector('.navbar');
let menus = document.querySelector('#menu');

menus.addEventListener('click', () =>{
    menus.classList.toggle('fa-times');
    navBar.classList.toggle('active');
});
