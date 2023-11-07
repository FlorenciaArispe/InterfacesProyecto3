document.getElementById("open-popup-btn").addEventListener("click", function(event){
    event.preventDefault();
    document.getElementsByClassName("popup")[0].classList.add("active");
});

document.getElementById("dismiss-pop").addEventListener("click", function(event){
    event.preventDefault();
    window.location.href="home.html";
});


const ojoCerrado = document.querySelector('.ojoCerrado');
const ojoAbierto = document.querySelector('.ojoAbierto');

ojoCerrado.addEventListener('click',function(){
    ojoCerrado.style.display ='none';
    ojoAbierto.style.display='block';
});
ojoAbierto.addEventListener('click',function(){
    ojoAbierto.style.display = 'none';
    ojoCerrado.style.display = 'block';
});

