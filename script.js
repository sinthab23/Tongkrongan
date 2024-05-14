const menuToggle = document.querySelector('.btn input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function(){
  nav.classList.toggle('slide');
  
});