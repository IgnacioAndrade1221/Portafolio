const nav=document.querySelector('.interfaz');

window.addEventListener('scroll',function(){
    nav.classList.toggle('activate', window.scrollY > 0);
});