let entrar = document.getElementById('entrarJ');
let canvas= document.querySelector('#canvas');
/** @type {CanvasRenderingContext2D} */
let context= canvas.getContext('2d');
let alturaCanvas= canvas.height;
let anchoCanvas= canvas.width;
let fichas = [];
let tablero = null;
let cantFichas=0;
const anchoTablero= 500;
const altoTablero=400;
let lastClickedFigure= null;
let isMouseDown= false;
let jugadorActual= 1;
let jugador1= "";
let imagenFicha1="";
let jugador2= "";
let imagenFicha2="";
let radio= 30;
let div= document.querySelector(".elegirDimensiones");
let navJuego=document.querySelector(".navJuego");
let idBotonClickeado=4;
let nombresJugadores=[];
let h1Turno = document.getElementById("turnoDelJugador");
let felicitaciones = document.getElementById("felicitaciones");
let ganador= document.querySelector('.ganaste');
let elegiJugador = document.getElementById('elegiJugador');
let irAInstrucciones = document.getElementById('irAInstrucciones');
let hayGanador=false;
let tiempoRestante = 5 * 60;
let elementoTiempo = document.getElementById("tiempo");
let temporizador = setInterval(actualizarTiempo, 1000);
let dimensionesTablero = {
    "4": {filas: 6, columnas: 7},
    "5": {filas: 7, columnas: 8},
    "6": {filas: 8, columnas: 9},
    "7": {filas: 9, columnas: 10}
};
let dimensiones= dimensionesTablero[idBotonClickeado];
let reiniciar= document.getElementById('resetJuego');
let flecha;


function reiniciarJuego(){
    tiempoRestante = 5 * 60;
    clearCanvas();
    lastClickedFigure=null;
    tablero=null;
    nombresJugadores=[];
    hayGanador=false;
    isMouseDown=false;
    ganador.style.display = "none";
    iniciarJuego();
}

function iniciarJuego(){    
    fichas=[];
    dimensiones= dimensionesTablero[idBotonClickeado];
    crearTablero(dimensiones.filas, dimensiones.columnas, idBotonClickeado);
    cantFichas = dimensiones.filas * dimensiones.columnas / 2;
    addFichas();
    drawFichas();   
    configurarJugadores();
    actualizarTiempo();
    jugadorActual= 1;
    h1Turno.textContent = "TURNO DE: " + nombresJugadores[jugadorActual - 1];
    nombre1.textContent= "Jugador: " +jugador1;
    nombre2.textContent= "Jugador: " +jugador2;
}

reiniciar.addEventListener('click', function(){
    reiniciarJuego();
})

irAInstrucciones.addEventListener('click', function(){
    elegiJugador.style.display="flex";
});
irAInstrucciones.addEventListener('click', function(){
    this.style.display= "none";
});

function addFlechas(){
    let posX=405;
    let posY=180;
    flecha = new Flecha(posX, posY, context,radio,anchoTablero,altoTablero,dimensiones.columnas);
    flecha.draw();
}
addFlechas();

let imagenesFicha= {
    "wanda": "images/wanda.png",
    "cosmo": "images/cosmo.png",
    "bebe": "images/bebe.png"
}

let mostrarNombres= document.querySelector(".nombresJugadores");
let nombre1= document.querySelector(".nombre1");
let nombre2= document.querySelector(".nombre2");

let volveraJugar= document.querySelector(".volveraJugar");
volveraJugar.addEventListener('click', function(){
    elegiJugador.style.display="flex";
    canvas.style.display="none";
    navJuego.style.display="none";   
    ganador.style.display = "none";
    mostrarNombres.style.display="none";
});

let menuJuego = document.querySelector(".menuJuego");
menuJuego.addEventListener('click', function(){
    elegiJugador.style.display="flex";
    canvas.style.display="none";
    navJuego.style.display="none";
    ganador.style.display = "none"; 
    mostrarNombres.style.display="none"; 
});

entrar.addEventListener('click', function(){
    reiniciarJuego();

    document.querySelector(".playJugar").style.display = "none";
    canvas.style.display="flex";
    navJuego.style.display="flex";
    mostrarNombres.style.display="flex";

    let botones= div.querySelectorAll("button");
    botones.forEach(function(boton){
        boton.addEventListener("click", function(event){
            idBotonClickeado=event.target.id;
            clearCanvas();
            cambiarDimension();
            reiniciarJuego();
        })
    })
   
    clearInterval(temporizador);
    tiempoRestante = 5 * 60;
    temporizador = setInterval(actualizarTiempo, 1000);
    configurarJugadores();
    h1Turno.textContent = "TURNO DE: " + nombresJugadores[jugadorActual - 1];
    configurarFichas();
    iniciarJuego(); 
    
})

function configurarJugadores(){
    let inputJugador1= document.getElementById('nombreJugador1').value;
    if(inputJugador1==""){
        inputJugador1="Jugador 1";
    }
    jugador1=inputJugador1;
    nombresJugadores.push(jugador1);
    let inputJugador2= document.getElementById('nombreJugador2').value;
    if(inputJugador1==inputJugador2 || inputJugador2==""){
        jugador2= "Jugador 2";
        nombresJugadores.push(jugador2);
    }
    else{
        jugador2=inputJugador2;
        nombresJugadores.push(jugador2);
    }
}

function configurarFichas(){
     //ficha 1
     let inputFicha= document.getElementById('selectFicha1');
     let selectValor= inputFicha.options[inputFicha.selectedIndex].value;
     imagenFicha1= imagenesFicha[selectValor];
     
     //ficha 2
     inputFicha= document.getElementById('selectFicha2');
     let selectValor2= inputFicha.options[inputFicha.selectedIndex].value;
    
     if(selectValor!=selectValor2){
         imagenFicha2=imagenesFicha[selectValor2];
     }
     else{
         let imagenesSinRepetir={
             "0":"",
             "1":""
         };
         let i=0;
         for(let clave in imagenesFicha){
             
             if(imagenesFicha.hasOwnProperty(clave)){//para ver si la clave realmente pertenece al objeto
                 if(imagenFicha1!==imagenesFicha[clave]&& i<3){                    
                     imagenesSinRepetir[i]= imagenesFicha[clave];
                     i++;
                 }                
             }
         }
         let claveAleatoria= Math.floor(Math.random()*2);
         imagenFicha2= imagenesSinRepetir[claveAleatoria];
     }
}

function actualizarTiempo(){   
    let minutos = Math.floor(tiempoRestante / 60); 
    let segundos = tiempoRestante % 60;
    let tiempoFormateado = `0${minutos}:${segundos}`;
    elementoTiempo.textContent = "Tiempo restante: " + tiempoFormateado;
    tiempoRestante--;
    if (tiempoRestante < 0) {
      
    let agotado= elementoTiempo.textContent = "Tiempo agotado";

      felicitaciones.textContent = "Empate, " + agotado;
     
    ganador.style.display="flex";
    }
   
}
function cambiarDimension(){
    let dimensiones= dimensionesTablero[idBotonClickeado];
    crearTablero(dimensiones.filas, dimensiones.columnas, idBotonClickeado);
    cantFichas = dimensiones.filas * dimensiones.columnas / 2;
    addFichas();
    drawFichas(); 
}

function crearTablero(filas,columnas, id){
    let posX=400;
    let posY=210;
    let color= 'rgba(8, 86, 92, 1)'; 
    radio=30;
    if(filas==7){
        radio=25;
    }

    else if(filas==8 ){
        radio=22;
    }
    else if(filas==9 ){
        radio=20;
    }
    tablero = new Tablero(posX, posY,color, context,filas,columnas,anchoTablero,altoTablero, radio, id);

}

function cambiarTurno(){
    jugadorActual= jugadorActual === 1 ? 2 : 1;
        // Actualiza el contenido del h1 con el nombre del jugador actual
    h1Turno.textContent = "TURNO DE: " + nombresJugadores[jugadorActual - 1];
       
}

function addFichas() {
    
    let filasFichas= 3;
    if(cantFichas>35){
        filasFichas=4;
    }
    let fichasPorFilas=Math.round(cantFichas/filasFichas);
    let espacioEntreFilas= 500/fichasPorFilas;
    let espacioEntreColumnas= tablero.getPosX()/filasFichas;
   
    for(let f=0; f<filasFichas;f++){
        for (let i = 0; i < fichasPorFilas; i++) {
            
            //FICHA1
            let posX= f * espacioEntreColumnas + espacioEntreColumnas / 2;
            let posY= 140 + i * espacioEntreFilas + espacioEntreFilas / 2 ;
            let colorBorde='rgba(64, 64, 64, 0.5)';
            ficha1 = new Ficha(posX, posY, context, imagenFicha1,jugador1,radio, colorBorde);
            fichas.push(ficha1);
        
            //FICHAS2
            posX = tablero.getPosX() + anchoTablero + f * espacioEntreColumnas + espacioEntreColumnas / 2;
            ficha2 = new Ficha(posX, posY, context, imagenFicha2, jugador2,radio, colorBorde);
            fichas.push(ficha2);
            
        }
    }
}

function drawTablero(){
    tablero.draw();
    
}

/*offsetX y offsetY almacenan el desplazamiento del cursor desde el 
centro de la ficha cuando se hace clic en ella */
let offsetX = 0;
let offsetY = 0;

function onMouseDown(e){
    isMouseDown=true;
    let clickFig= findClickedFigure(e.layerX, e.layerY);
    if(clickFig!=null && !hayGanador){
        lastClickedFigure=clickFig;
            offsetX = e.layerX - clickFig.getPosX();
            offsetY = e.layerY - clickFig.getPosY();
       
    }
    drawFichas();
}

function onMouseMove(e){
    if(isMouseDown && !hayGanador && lastClickedFigure!= null && !lastClickedFigure.getUsada() && 
                     lastClickedFigure.getJugador()===(jugadorActual===1 ? jugador1 : jugador2)){
        lastClickedFigure.setPosition(e.layerX - offsetX, e.layerY - offsetY);
        drawFichas();
    }
}

function onMouseUp(e){

    let posXTablero = tablero.getPosX();
        let posYTablero= tablero.getPosY();
       
        isMouseDown= false;
    if (lastClickedFigure != null && posXTablero < lastClickedFigure.getPosX() && lastClickedFigure.getPosX()< 900 &&
        !lastClickedFigure.getUsada() && lastClickedFigure.getPosY()<posYTablero && lastClickedFigure.getPosY()>0) {
       
        jugar(lastClickedFigure);
    
            
            //lastClickedFigure.setUsada(true);
    }
        else if(lastClickedFigure!=null&& !lastClickedFigure.getUsada()){
            lastClickedFigure.setPosition(lastClickedFigure.getPosXInicial(), lastClickedFigure.getPosYInicial());
            drawFichas();
        }
    }


function jugar(lastClickedFigure){
    if(lastClickedFigure.getJugador()===(jugadorActual===1 ? jugador1 : jugador2)){
        let ganador= tablero.colocarFicha(lastClickedFigure);
        if(ganador){
            hayGanador=true;
            clearInterval(temporizador);
        }
        lastClickedFigure=null;
        drawFichas();
        cambiarTurno();
    }
   
}
function drawFichas(){
    clearCanvas();
    addFlechas();
    drawTablero();
    for(let i=0; i< fichas.length; i++ ){
        fichas[i].draw();
    }
}

function clearCanvas(){

    let gradient = context.createLinearGradient(0, 0,anchoCanvas,0);
    gradient.addColorStop(0, 'rgba(223,87,153,1)');  // Color inicial en la parte superior
    gradient.addColorStop(1, 'rgba(118,197,58,1)');  // Color final en la parte inferior

    context.fillStyle = gradient;
    context.fillRect(0, 0, anchoCanvas, alturaCanvas);
    
}

function findClickedFigure(x,y){
    for( let i=fichas.length -1; i>= 0; i--){
        const element = fichas[i];
        if(element.isPointInside(x,y)){
            return element;
        }
    }
    
}
canvas.addEventListener('mousedown', onMouseDown, false);
canvas.addEventListener('mouseup', onMouseUp, false);
canvas.addEventListener('mousemove', onMouseMove, false);