const ojoAbiertoRepet = document.querySelector('.ojoAbiertoRepet');
const ojoCerradoRepet = document.querySelector('.ojoCerradoRepet');
ojoCerradoRepet.addEventListener('click',function(){
    ojoCerradoRepet.style.display ='none';
    ojoAbiertoRepet.style.display='block';
});
ojoAbiertoRepet.addEventListener('click',function(){
    ojoAbiertoRepet.style.display = 'none';
    ojoCerradoRepet.style.display = 'block';
});


