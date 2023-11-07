
const cards= [
   
    {
        id: 1,
        nameJuego: "Minecraft",
        precio: "1000$",
        img: "images/minecraft.png",
        carrito: ' <svg class="icono-carrito" width="25" height="35" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"> <circle stroke="#797C76" stroke-linecap="round" stroke-width="1.5" cx="10" cy="28" r="2"/> <circle stroke="#797C76" stroke-linecap="round" stroke-width="1.5" cx="24" cy="28" r="2"/> <path stroke="#797C76" stroke-linecap="round" stroke-width="1.5" d="m28 7h-22.18l-.82-4.2a1 1 0 0 0 -1-.8h-4v2h3.18l3.82 19.2a1 1 0 0 0 1 .8h18v-2h-17.18l-.82-4h18a1 1 0 0 0 1-.78l2-9a1 1 0 0 0 -1-1.22zm-2.8 9h-17.58l-1.4-7h20.53z"/> <path d="m0 0h32v32h-32z" fill="none"/> </svg>' 
    },
    {
        id: 2,
        nameJuego: "Defensa Scout",
        precio: "",
        img: "images/defensaScout.webp",
        carrito: ""
    },
    {
        id: 3,
        nameJuego: "Mario Bross",
        precio: "1500$",
        img: "images/mario.png",
        carrito: ' <svg class="icono-carrito" width="25" height="35" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"> <circle stroke="#797C76" stroke-linecap="round" stroke-width="1.5" cx="10" cy="28" r="2"/> <circle stroke="#797C76" stroke-linecap="round" stroke-width="1.5" cx="24" cy="28" r="2"/> <path stroke="#797C76" stroke-linecap="round" stroke-width="1.5" d="m28 7h-22.18l-.82-4.2a1 1 0 0 0 -1-.8h-4v2h3.18l3.82 19.2a1 1 0 0 0 1 .8h18v-2h-17.18l-.82-4h18a1 1 0 0 0 1-.78l2-9a1 1 0 0 0 -1-1.22zm-2.8 9h-17.58l-1.4-7h20.53z"/> <path d="m0 0h32v32h-32z" fill="none"/> </svg>' 
    },
    {
        id: 4,
        nameJuego: "Fuego vs Hielo",
        precio: "",
        img: "images/fuegoVShielo.jpg",
        carrito: ""
    },
    {
        id: 5,
        nameJuego: "Pacman",
        precio: "",
        img: "images/pacman.jpg",
        carrito: ""
    },
    {
        id: 6,
        nameJuego: "Roblox",
        precio: "1200$",
        img: "images/roblox.jpeg",
        carrito: ' <svg class="icono-carrito" width="25" height="35" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"> <circle stroke="#797C76" stroke-linecap="round" stroke-width="1.5" cx="10" cy="28" r="2"/> <circle stroke="#797C76" stroke-linecap="round" stroke-width="1.5" cx="24" cy="28" r="2"/> <path stroke="#797C76" stroke-linecap="round" stroke-width="1.5" d="m28 7h-22.18l-.82-4.2a1 1 0 0 0 -1-.8h-4v2h3.18l3.82 19.2a1 1 0 0 0 1 .8h18v-2h-17.18l-.82-4h18a1 1 0 0 0 1-.78l2-9a1 1 0 0 0 -1-1.22zm-2.8 9h-17.58l-1.4-7h20.53z"/> <path d="m0 0h32v32h-32z" fill="none"/> </svg>' 
    },



];

const categoriaAutos= [
    {
        id:1,
        nameJuego: "Race Master",
        precio:"1300$",
        img: "images/raceMaster-autos.jpg",
        carrito: '<svg class="icono-carrito"width="20" height="18" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"> <circle stroke="#797C76" stroke-linecap="round" stroke-width="1.5" cx="10" cy="28" r="2"/> <circle stroke="#797C76" stroke-linecap="round" stroke-width="1.5" cx="24" cy="28" r="2"/> <path stroke="#797C76" stroke-linecap="round" stroke-width="1.5" d="m28 7h-22.18l-.82-4.2a1 1 0 0 0 -1-.8h-4v2h3.18l3.82 19.2a1 1 0 0 0 1 .8h18v-2h-17.18l-.82-4h18a1 1 0 0 0 1-.78l2-9a1 1 0 0 0 -1-1.22zm-2.8 9h-17.58l-1.4-7h20.53z"/><path d="m0 0h32v32h-32z" fill="none"/></svg>'
    },
    {
        id:2,
        nameJuego: "Careers",
        precio:"2000$",
        img: "images/careers-autos.jpg",
        carrito: '<svg class="icono-carrito" width="20" height="18" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"> <circle stroke="#797C76" stroke-linecap="round" stroke-width="1.5" cx="10" cy="28" r="2"/> <circle stroke="#797C76" stroke-linecap="round" stroke-width="1.5" cx="24" cy="28" r="2"/> <path stroke="#797C76" stroke-linecap="round" stroke-width="1.5" d="m28 7h-22.18l-.82-4.2a1 1 0 0 0 -1-.8h-4v2h3.18l3.82 19.2a1 1 0 0 0 1 .8h18v-2h-17.18l-.82-4h18a1 1 0 0 0 1-.78l2-9a1 1 0 0 0 -1-1.22zm-2.8 9h-17.58l-1.4-7h20.53z"/><path d="m0 0h32v32h-32z" fill="none"/></svg>'
    },
    {
        id:3,
        nameJuego: "Cars Run",
        precio:"",
        img: "images/carsRun-autos.jpg",
        carrito: ''
    },
    {
        id:4,
        nameJuego: "Cars Turbo",
        precio:"2200$",
        img: "images/carsTurbo-autos.jpg",
        carrito: '<svg class="icono-carrito" width="20" height="18" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"> <circle stroke="#797C76" stroke-linecap="round" stroke-width="1.5" cx="10" cy="28" r="2"/> <circle stroke="#797C76" stroke-linecap="round" stroke-width="1.5" cx="24" cy="28" r="2"/> <path stroke="#797C76" stroke-linecap="round" stroke-width="1.5" d="m28 7h-22.18l-.82-4.2a1 1 0 0 0 -1-.8h-4v2h3.18l3.82 19.2a1 1 0 0 0 1 .8h18v-2h-17.18l-.82-4h18a1 1 0 0 0 1-.78l2-9a1 1 0 0 0 -1-1.22zm-2.8 9h-17.58l-1.4-7h20.53z"/><path d="m0 0h32v32h-32z" fill="none"/></svg>'
    },
    {
        id:5,
        nameJuego: "Construct",
        precio:"",
        img: "images/construct-autos.jpg",
        carrito: ''
    },
    {
        id:6,
        nameJuego: "Fast Car",
        precio:"",
        img: "images/fastCar-autos.jpg",
        carrito: ''
    },
    {
        id:7,
        nameJuego: "Garage Cars",
        precio:"2200$",
        img: "images/garageCars-autos.jpg",
        carrito: '<svg class="icono-carrito" width="20" height="18" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"> <circle stroke="#797C76" stroke-linecap="round" stroke-width="1.5" cx="10" cy="28" r="2"/> <circle stroke="#797C76" stroke-linecap="round" stroke-width="1.5" cx="24" cy="28" r="2"/> <path stroke="#797C76" stroke-linecap="round" stroke-width="1.5" d="m28 7h-22.18l-.82-4.2a1 1 0 0 0 -1-.8h-4v2h3.18l3.82 19.2a1 1 0 0 0 1 .8h18v-2h-17.18l-.82-4h18a1 1 0 0 0 1-.78l2-9a1 1 0 0 0 -1-1.22zm-2.8 9h-17.58l-1.4-7h20.53z"/><path d="m0 0h32v32h-32z" fill="none"/></svg>'
    },
    {
        id:8,
        nameJuego: "Mecanics",
        precio:"1700$",
        img: "images/mecanics-autos.jpg",
        carrito: '<svg class="icono-carrito" width="20" height="18" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"> <circle stroke="#797C76" stroke-linecap="round" stroke-width="1.5" cx="10" cy="28" r="2"/> <circle stroke="#797C76" stroke-linecap="round" stroke-width="1.5" cx="24" cy="28" r="2"/> <path stroke="#797C76" stroke-linecap="round" stroke-width="1.5" d="m28 7h-22.18l-.82-4.2a1 1 0 0 0 -1-.8h-4v2h3.18l3.82 19.2a1 1 0 0 0 1 .8h18v-2h-17.18l-.82-4h18a1 1 0 0 0 1-.78l2-9a1 1 0 0 0 -1-1.22zm-2.8 9h-17.58l-1.4-7h20.53z"/><path d="m0 0h32v32h-32z" fill="none"/></svg>'
    },
];

const categoriaNumeros= [
    {
        id:1,
        nameJuego: "Bingo",
        precio:"3300$",
        img: "images/bingo-numeros.jpg",
        carrito: '<svg class="icono-carrito" width="20" height="18" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"> <circle stroke="#797C76" stroke-linecap="round" stroke-width="1.5" cx="10" cy="28" r="2"/> <circle stroke="#797C76" stroke-linecap="round" stroke-width="1.5" cx="24" cy="28" r="2"/> <path stroke="#797C76" stroke-linecap="round" stroke-width="1.5" d="m28 7h-22.18l-.82-4.2a1 1 0 0 0 -1-.8h-4v2h3.18l3.82 19.2a1 1 0 0 0 1 .8h18v-2h-17.18l-.82-4h18a1 1 0 0 0 1-.78l2-9a1 1 0 0 0 -1-1.22zm-2.8 9h-17.58l-1.4-7h20.53z"/><path d="m0 0h32v32h-32z" fill="none"/></svg>'
    },
    {
        id:2,
        nameJuego: "Decifra El Codigo",
        precio:"",
        img: "images/decifraElCodigo-numeros.png",
        carrito: ''
    },
    {
        id:3,
        nameJuego: "Domino",
        precio:"2300$",
        img: "images/domino-numeros.png",
        carrito: '<svg class="icono-carrito" width="20" height="18" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"> <circle stroke="#797C76" stroke-linecap="round" stroke-width="1.5" cx="10" cy="28" r="2"/> <circle stroke="#797C76" stroke-linecap="round" stroke-width="1.5" cx="24" cy="28" r="2"/> <path stroke="#797C76" stroke-linecap="round" stroke-width="1.5" d="m28 7h-22.18l-.82-4.2a1 1 0 0 0 -1-.8h-4v2h3.18l3.82 19.2a1 1 0 0 0 1 .8h18v-2h-17.18l-.82-4h18a1 1 0 0 0 1-.78l2-9a1 1 0 0 0 -1-1.22zm-2.8 9h-17.58l-1.4-7h20.53z"/><path d="m0 0h32v32h-32z" fill="none"/></svg>'
    },
    
    {
        id:4,
        nameJuego: "Sopa",
        precio:"2200$",
        img: "images/sopa-numero.jpg",
        carrito: '<svg class="icono-carrito" width="20" height="18" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"> <circle stroke="#797C76" stroke-linecap="round" stroke-width="1.5" cx="10" cy="28" r="2"/> <circle stroke="#797C76" stroke-linecap="round" stroke-width="1.5" cx="24" cy="28" r="2"/> <path stroke="#797C76" stroke-linecap="round" stroke-width="1.5" d="m28 7h-22.18l-.82-4.2a1 1 0 0 0 -1-.8h-4v2h3.18l3.82 19.2a1 1 0 0 0 1 .8h18v-2h-17.18l-.82-4h18a1 1 0 0 0 1-.78l2-9a1 1 0 0 0 -1-1.22zm-2.8 9h-17.58l-1.4-7h20.53z"/><path d="m0 0h32v32h-32z" fill="none"/></svg>'
    },
    {
        id:5,
        nameJuego: "Suduko",
        precio:"5200$",
        img: "images/Sudoku-numeros.png",
        carrito: '<svg class="icono-carrito" width="20" height="18" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"> <circle stroke="#797C76" stroke-linecap="round" stroke-width="1.5" cx="10" cy="28" r="2"/> <circle stroke="#797C76" stroke-linecap="round" stroke-width="1.5" cx="24" cy="28" r="2"/> <path stroke="#797C76" stroke-linecap="round" stroke-width="1.5" d="m28 7h-22.18l-.82-4.2a1 1 0 0 0 -1-.8h-4v2h3.18l3.82 19.2a1 1 0 0 0 1 .8h18v-2h-17.18l-.82-4h18a1 1 0 0 0 1-.78l2-9a1 1 0 0 0 -1-1.22zm-2.8 9h-17.58l-1.4-7h20.53z"/><path d="m0 0h32v32h-32z" fill="none"/></svg>'
    },
    {
        id:6,
        nameJuego: "Tren Carga",
        precio:"",
        img: "images/trenCarga-numeros.png",
        carrito: ''
    },
    {
        id:7,
        nameJuego: "Merge The Numbers",
        precio:"",
        img: "images/mergeTheNumbers-numeros.jpg",
        carrito: ''
    },
   
    {
        id:8,
        nameJuego: "Impossible 13",
        precio:"1700$",
        img: "images/impossible13-numeros.jpg",
        carrito: '<svg class="icono-carrito" width="20" height="18" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"> <circle stroke="#797C76" stroke-linecap="round" stroke-width="1.5" cx="10" cy="28" r="2"/> <circle stroke="#797C76" stroke-linecap="round" stroke-width="1.5" cx="24" cy="28" r="2"/> <path stroke="#797C76" stroke-linecap="round" stroke-width="1.5" d="m28 7h-22.18l-.82-4.2a1 1 0 0 0 -1-.8h-4v2h3.18l3.82 19.2a1 1 0 0 0 1 .8h18v-2h-17.18l-.82-4h18a1 1 0 0 0 1-.78l2-9a1 1 0 0 0 -1-1.22zm-2.8 9h-17.58l-1.4-7h20.53z"/><path d="m0 0h32v32h-32z" fill="none"/></svg>'
    },
];

const categoriaCarreras= [
    {
        id:1,
        nameJuego: "Hilm Climb",
        precio:"3200$",
        img: "images/hilmClimb-carreras.jpg",
        carrito: '<svg class="icono-carrito" width="20" height="18" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"> <circle stroke="#797C76" stroke-linecap="round" stroke-width="1.5" cx="10" cy="28" r="2"/> <circle stroke="#797C76" stroke-linecap="round" stroke-width="1.5" cx="24" cy="28" r="2"/> <path stroke="#797C76" stroke-linecap="round" stroke-width="1.5" d="m28 7h-22.18l-.82-4.2a1 1 0 0 0 -1-.8h-4v2h3.18l3.82 19.2a1 1 0 0 0 1 .8h18v-2h-17.18l-.82-4h18a1 1 0 0 0 1-.78l2-9a1 1 0 0 0 -1-1.22zm-2.8 9h-17.58l-1.4-7h20.53z"/><path d="m0 0h32v32h-32z" fill="none"/></svg>'
    },
    {
        id:2,
        nameJuego: "Max Res",
        precio:"5000$",
        img: "images/maxres-carreras.jpg",
        carrito: '<svg class="icono-carrito" width="20" height="18" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"> <circle stroke="#797C76" stroke-linecap="round" stroke-width="1.5" cx="10" cy="28" r="2"/> <circle stroke="#797C76" stroke-linecap="round" stroke-width="1.5" cx="24" cy="28" r="2"/> <path stroke="#797C76" stroke-linecap="round" stroke-width="1.5" d="m28 7h-22.18l-.82-4.2a1 1 0 0 0 -1-.8h-4v2h3.18l3.82 19.2a1 1 0 0 0 1 .8h18v-2h-17.18l-.82-4h18a1 1 0 0 0 1-.78l2-9a1 1 0 0 0 -1-1.22zm-2.8 9h-17.58l-1.4-7h20.53z"/><path d="m0 0h32v32h-32z" fill="none"/></svg>'
    },
    {
        id:3,
        nameJuego: "Rally",
        precio:"5700$",
        img: "images/rally-carrera.jpg",
        carrito: '<svg class="icono-carrito" width="20" height="18" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"> <circle stroke="#797C76" stroke-linecap="round" stroke-width="1.5" cx="10" cy="28" r="2"/> <circle stroke="#797C76" stroke-linecap="round" stroke-width="1.5" cx="24" cy="28" r="2"/> <path stroke="#797C76" stroke-linecap="round" stroke-width="1.5" d="m28 7h-22.18l-.82-4.2a1 1 0 0 0 -1-.8h-4v2h3.18l3.82 19.2a1 1 0 0 0 1 .8h18v-2h-17.18l-.82-4h18a1 1 0 0 0 1-.78l2-9a1 1 0 0 0 -1-1.22zm-2.8 9h-17.58l-1.4-7h20.53z"/><path d="m0 0h32v32h-32z" fill="none"/></svg>'
    },
    {
        id:4,
        nameJuego: "Super Bikes",
        precio:"",
        img: "images/superBikes-carreras.jpg",
        carrito: ''
    },
    {
        id:5,
        nameJuego: "Turbo",
        precio:"1200$",
        img: "images/turbo.jpg",
        carrito: '<svg class="icono-carrito" width="20" height="18" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"> <circle stroke="#797C76" stroke-linecap="round" stroke-width="1.5" cx="10" cy="28" r="2"/> <circle stroke="#797C76" stroke-linecap="round" stroke-width="1.5" cx="24" cy="28" r="2"/> <path stroke="#797C76" stroke-linecap="round" stroke-width="1.5" d="m28 7h-22.18l-.82-4.2a1 1 0 0 0 -1-.8h-4v2h3.18l3.82 19.2a1 1 0 0 0 1 .8h18v-2h-17.18l-.82-4h18a1 1 0 0 0 1-.78l2-9a1 1 0 0 0 -1-1.22zm-2.8 9h-17.58l-1.4-7h20.53z"/><path d="m0 0h32v32h-32z" fill="none"/></svg>'
    },
    {
        id:6,
        nameJuego: "City Bus Driver",
        precio:"",
        img: "images/cityBusDriver-carreras.jpg",
        carrito: ''
    },
    
    {
        id:7,
        nameJuego: "Drift Escape",
        precio:"2700$",
        img: "images/driftEscape-carreras.jpg",
        carrito: '<svg class="icono-carrito" width="20" height="18" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"> <circle stroke="#797C76" stroke-linecap="round" stroke-width="1.5" cx="10" cy="28" r="2"/> <circle stroke="#797C76" stroke-linecap="round" stroke-width="1.5" cx="24" cy="28" r="2"/> <path stroke="#797C76" stroke-linecap="round" stroke-width="1.5" d="m28 7h-22.18l-.82-4.2a1 1 0 0 0 -1-.8h-4v2h3.18l3.82 19.2a1 1 0 0 0 1 .8h18v-2h-17.18l-.82-4h18a1 1 0 0 0 1-.78l2-9a1 1 0 0 0 -1-1.22zm-2.8 9h-17.58l-1.4-7h20.53z"/><path d="m0 0h32v32h-32z" fill="none"/></svg>'
    },   
   
    {
        id:8,
        nameJuego: "Super Star Car",
        precio:"",
        img: "images/superStarCar-carreras.jpg",
        carrito: ''
    },
   
];

const categoriaColorear= [
    {
        id:1,
        nameJuego: "Bubbles",
        precio:"3100$",
        img: "images/bubbles-colorear.jpg",
        carrito: '<svg class="icono-carrito" width="20" height="18" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"> <circle stroke="#797C76" stroke-linecap="round" stroke-width="1.5" cx="10" cy="28" r="2"/> <circle stroke="#797C76" stroke-linecap="round" stroke-width="1.5" cx="24" cy="28" r="2"/> <path stroke="#797C76" stroke-linecap="round" stroke-width="1.5" d="m28 7h-22.18l-.82-4.2a1 1 0 0 0 -1-.8h-4v2h3.18l3.82 19.2a1 1 0 0 0 1 .8h18v-2h-17.18l-.82-4h18a1 1 0 0 0 1-.78l2-9a1 1 0 0 0 -1-1.22zm-2.8 9h-17.58l-1.4-7h20.53z"/><path d="m0 0h32v32h-32z" fill="none"/></svg>'
    },
    {
        id:2,
        nameJuego: "Paint Animals",
        precio:"3600$",
        img: "images/paintAnimals-colorear.jpg",
        carrito: '<svg class="icono-carrito" width="20" height="18" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"> <circle stroke="#797C76" stroke-linecap="round" stroke-width="1.5" cx="10" cy="28" r="2"/> <circle stroke="#797C76" stroke-linecap="round" stroke-width="1.5" cx="24" cy="28" r="2"/> <path stroke="#797C76" stroke-linecap="round" stroke-width="1.5" d="m28 7h-22.18l-.82-4.2a1 1 0 0 0 -1-.8h-4v2h3.18l3.82 19.2a1 1 0 0 0 1 .8h18v-2h-17.18l-.82-4h18a1 1 0 0 0 1-.78l2-9a1 1 0 0 0 -1-1.22zm-2.8 9h-17.58l-1.4-7h20.53z"/><path d="m0 0h32v32h-32z" fill="none"/></svg>'
    },
    {
        id:3,
        nameJuego: "Pintar Dibujos",
        precio:"1000$",
        img: "images/pintarDibujos-colorear.jpg",
        carrito: '<svg class="icono-carrito" width="20" height="18" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"> <circle stroke="#797C76" stroke-linecap="round" stroke-width="1.5" cx="10" cy="28" r="2"/> <circle stroke="#797C76" stroke-linecap="round" stroke-width="1.5" cx="24" cy="28" r="2"/> <path stroke="#797C76" stroke-linecap="round" stroke-width="1.5" d="m28 7h-22.18l-.82-4.2a1 1 0 0 0 -1-.8h-4v2h3.18l3.82 19.2a1 1 0 0 0 1 .8h18v-2h-17.18l-.82-4h18a1 1 0 0 0 1-.78l2-9a1 1 0 0 0 -1-1.22zm-2.8 9h-17.58l-1.4-7h20.53z"/><path d="m0 0h32v32h-32z" fill="none"/></svg>'
    },
    {
        id:4,
        nameJuego: "Colojon",
        precio:"",
        img: "images/colojon-colorear.jpg",
        carrito: ''
    },
    
    {
        id:5,
        nameJuego: "Colorear",
        precio:"1250$",
        img: "images/colorear.jpg",
        carrito: '<svg class="icono-carrito" width="20" height="18" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"> <circle stroke="#797C76" stroke-linecap="round" stroke-width="1.5" cx="10" cy="28" r="2"/> <circle stroke="#797C76" stroke-linecap="round" stroke-width="1.5" cx="24" cy="28" r="2"/> <path stroke="#797C76" stroke-linecap="round" stroke-width="1.5" d="m28 7h-22.18l-.82-4.2a1 1 0 0 0 -1-.8h-4v2h3.18l3.82 19.2a1 1 0 0 0 1 .8h18v-2h-17.18l-.82-4h18a1 1 0 0 0 1-.78l2-9a1 1 0 0 0 -1-1.22zm-2.8 9h-17.58l-1.4-7h20.53z"/><path d="m0 0h32v32h-32z" fill="none"/></svg>'
    },  
    {
        id:6,
        nameJuego: "Drawar Ar Io",
        precio:"3200$",
        img: "images/drawarArIo-colorear.jpg",
        carrito: '<svg class="icono-carrito" width="20" height="18" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"> <circle stroke="#797C76" stroke-linecap="round" stroke-width="1.5" cx="10" cy="28" r="2"/> <circle stroke="#797C76" stroke-linecap="round" stroke-width="1.5" cx="24" cy="28" r="2"/> <path stroke="#797C76" stroke-linecap="round" stroke-width="1.5" d="m28 7h-22.18l-.82-4.2a1 1 0 0 0 -1-.8h-4v2h3.18l3.82 19.2a1 1 0 0 0 1 .8h18v-2h-17.18l-.82-4h18a1 1 0 0 0 1-.78l2-9a1 1 0 0 0 -1-1.22zm-2.8 9h-17.58l-1.4-7h20.53z"/><path d="m0 0h32v32h-32z" fill="none"/></svg>'
    },
    
    {
        id:7,
        nameJuego: "Pixel Color",
        precio:"",
        img: "images/pixelColor-colorear.jpg",
        carrito: ''
    },
    
    {
        id:8,
        nameJuego: "Slime Rancher 2",
        precio:"",
        img: "images/slimeRancher2-colorear.jpg",
        carrito: ''
    }, 
   
];

const categoriaPuzzle= [
    {
        id:1,
        nameJuego: "Block Puzzle",
        precio:"1000$",
        img: "images/blockPuzzle.jpg",
        carrito: '<svg class="icono-carrito" width="20" height="18" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"> <circle stroke="#797C76" stroke-linecap="round" stroke-width="1.5" cx="10" cy="28" r="2"/> <circle stroke="#797C76" stroke-linecap="round" stroke-width="1.5" cx="24" cy="28" r="2"/> <path stroke="#797C76" stroke-linecap="round" stroke-width="1.5" d="m28 7h-22.18l-.82-4.2a1 1 0 0 0 -1-.8h-4v2h3.18l3.82 19.2a1 1 0 0 0 1 .8h18v-2h-17.18l-.82-4h18a1 1 0 0 0 1-.78l2-9a1 1 0 0 0 -1-1.22zm-2.8 9h-17.58l-1.4-7h20.53z"/><path d="m0 0h32v32h-32z" fill="none"/></svg>'
    },
    {
        id:2,
        nameJuego: "Puzzle Cubic",
        precio:"3100$",
        img: "images/puzzleCubic-puzzle.jpg",
        carrito: '<svg class="icono-carrito" width="20" height="18" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"> <circle stroke="#797C76" stroke-linecap="round" stroke-width="1.5" cx="10" cy="28" r="2"/> <circle stroke="#797C76" stroke-linecap="round" stroke-width="1.5" cx="24" cy="28" r="2"/> <path stroke="#797C76" stroke-linecap="round" stroke-width="1.5" d="m28 7h-22.18l-.82-4.2a1 1 0 0 0 -1-.8h-4v2h3.18l3.82 19.2a1 1 0 0 0 1 .8h18v-2h-17.18l-.82-4h18a1 1 0 0 0 1-.78l2-9a1 1 0 0 0 -1-1.22zm-2.8 9h-17.58l-1.4-7h20.53z"/><path d="m0 0h32v32h-32z" fill="none"/></svg>'
    },
     
    {
        id:3,
        nameJuego: "Puzzle Pets",
        precio:"",
        img: "images/puzzlePets-puzzle.jpg",
        carrito: ''
    },
    
    {
        id:4,
        nameJuego: "Emoji Puzzle",
        precio:"1200$",
        img: "images/emojiPuzzle-puzzle.jpg",
        carrito: '<svg class="icono-carrito" width="20" height="18" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"> <circle stroke="#797C76" stroke-linecap="round" stroke-width="1.5" cx="10" cy="28" r="2"/> <circle stroke="#797C76" stroke-linecap="round" stroke-width="1.5" cx="24" cy="28" r="2"/> <path stroke="#797C76" stroke-linecap="round" stroke-width="1.5" d="m28 7h-22.18l-.82-4.2a1 1 0 0 0 -1-.8h-4v2h3.18l3.82 19.2a1 1 0 0 0 1 .8h18v-2h-17.18l-.82-4h18a1 1 0 0 0 1-.78l2-9a1 1 0 0 0 -1-1.22zm-2.8 9h-17.58l-1.4-7h20.53z"/><path d="m0 0h32v32h-32z" fill="none"/></svg>'
    },
    
    {
        id:5,
        nameJuego: "Egypt Puzzle",
        precio:"5000$",
        img: "images/egyptPuzzle.jpg",
        carrito: '<svg class="icono-carrito" width="20" height="18" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"> <circle stroke="#797C76" stroke-linecap="round" stroke-width="1.5" cx="10" cy="28" r="2"/> <circle stroke="#797C76" stroke-linecap="round" stroke-width="1.5" cx="24" cy="28" r="2"/> <path stroke="#797C76" stroke-linecap="round" stroke-width="1.5" d="m28 7h-22.18l-.82-4.2a1 1 0 0 0 -1-.8h-4v2h3.18l3.82 19.2a1 1 0 0 0 1 .8h18v-2h-17.18l-.82-4h18a1 1 0 0 0 1-.78l2-9a1 1 0 0 0 -1-1.22zm-2.8 9h-17.58l-1.4-7h20.53z"/><path d="m0 0h32v32h-32z" fill="none"/></svg>'
    },
    {
        id:6,
        nameJuego: "Fishing Blocks",
        precio:"",
        img: "images/fishingBlocks-puzzle.jpg",
        carrito: ''
    },
    
    {
        id:7,
        nameJuego: "Merge Items",
        precio:"2000$",
        img: "images/mergeItems-puzzle.jpg",
        carrito: '<svg class="icono-carrito" width="20" height="18" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"> <circle stroke="#797C76" stroke-linecap="round" stroke-width="1.5" cx="10" cy="28" r="2"/> <circle stroke="#797C76" stroke-linecap="round" stroke-width="1.5" cx="24" cy="28" r="2"/> <path stroke="#797C76" stroke-linecap="round" stroke-width="1.5" d="m28 7h-22.18l-.82-4.2a1 1 0 0 0 -1-.8h-4v2h3.18l3.82 19.2a1 1 0 0 0 1 .8h18v-2h-17.18l-.82-4h18a1 1 0 0 0 1-.78l2-9a1 1 0 0 0 -1-1.22zm-2.8 9h-17.58l-1.4-7h20.53z"/><path d="m0 0h32v32h-32z" fill="none"/></svg>'
    },  
   
   
    {
        id:8,
        nameJuego: "Bubble Puzzle",
        precio:"",
        img: "images/bubblePuzzle.jpg",
        carrito: ''
    }, 
   
];

let card= document.getElementById("carousel-container");
let autos= document.getElementById("categoriaAutos");
let numeros= document.getElementById("categoriaNumeros");
let carreras= document.getElementById("categoriaCarreras");
let colorear= document.getElementById("categoriaColorear");
let puzzle= document.getElementById("categoriaPuzzle");
let numerosMobile= document.getElementById("numerosMobile");
let carrerasMobile=document.getElementById("carrerasMobile");

cards.map((x) =>{
    card.innerHTML += `
    <div class="card animacionScroll">
    <img class="img-card" src="${x.img}" alt="${x.nameJuego}">
    <div class="text-card">
        <div>
            <p>${x.nameJuego}</p> 
            <p>${x.precio}</p>
        </div>                
        <div>
        ${x.carrito}             
            <svg width="25" height="35" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="#797C76" d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z" class="ci-primary"/>
            </svg>
        </div>    
    </div>
</div>
    `;
});

categoriaAutos.map((i)=> {
    autos.innerHTML +=`
    <div class="cardCategoria">
    <img class="img-cardCategoria" src="${i.img}" alt="${i.nameJuego}">
    <div class="text-cardCategoria">
        <div>
            <p>${i.nameJuego}</p> 
            <p>${i.precio}</p>
        </div>                
        <div>
            ${i.carrito} 
            <svg width="20" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="#797C76" d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z" class="ci-primary"/>
            </svg>
        </div>    
    </div>
</div>   
    `
});

categoriaNumeros.map((i)=>{
    numeros.innerHTML +=`
    <div class="cardCategoria">
    <img class="img-cardCategoria" src="${i.img}" alt="${i.nameJuego}">
    <div class="text-cardCategoria">
        <div>
            <p>${i.nameJuego}</p> 
            <p>${i.precio}</p>
        </div>                
        <div>
        ${i.carrito} 
            <svg width="20" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="#797C76" d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z" class="ci-primary"/>
            </svg>
        </div>    
    </div>
</div>  
    `
})

categoriaCarreras.map((i)=> {
    carrerasMobile.innerHTML +=`
    <div class="cardMobile">
    <img class="img-cardMobile" src="${i.img}" alt="${i.nameJuego}">
    <div class="text-cardMobile">
        <div>
            <p>${i.nameJuego}</p> 
            <p>${i.precio}</p>
        </div>                
        <div>
            ${i.carrito} 
            <svg width="20" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="#797C76" d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z" class="ci-primary"/>
            </svg>
        </div>    
    </div>
</div>   
    `
});

//MOBILE
categoriaNumeros.map((i)=>{
    numerosMobile.innerHTML +=`
    <div class="cardMobile">
    <img class="img-cardMobile" src="${i.img}" alt="${i.nameJuego}">
    <div class="text-cardMobile">
        <div>
            <p>${i.nameJuego}</p> 
            <p>${i.precio}</p>
        </div>                
        <div>
        ${i.carrito} 
            <svg width="20" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="#797C76" d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z" class="ci-primary"/>
            </svg>
        </div>    
    </div>
</div>  
    `
})

categoriaCarreras.map((i)=> {
    carreras.innerHTML +=`
    <div class="cardCategoria">
    <img class="img-cardCategoria" src="${i.img}" alt="${i.nameJuego}">
    <div class="text-cardCategoria">
        <div>
            <p>${i.nameJuego}</p> 
            <p>${i.precio}</p>
        </div>                
        <div>
            ${i.carrito} 
            <svg width="20" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="#797C76" d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z" class="ci-primary"/>
            </svg>
        </div>    
    </div>
</div>   
    `
});

categoriaColorear.map((i)=> {
    colorear.innerHTML +=`
    <div class="cardCategoria">
    <img class="img-cardCategoria" src="${i.img}" alt="${i.nameJuego}">
    <div class="text-cardCategoria">
        <div>
            <p>${i.nameJuego}</p> 
            <p>${i.precio}</p>
        </div>                
        <div>
            ${i.carrito} 
            <svg width="20" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="#797C76" d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z" class="ci-primary"/>
            </svg>
        </div>    
    </div>
</div>   
    `
});

categoriaPuzzle.map((i)=> {
    puzzle.innerHTML +=`
    <div class="cardCategoria">
    <img class="img-cardCategoria" src="${i.img}" alt="${i.nameJuego}">
    <div class="text-cardCategoria">
        <div>
            <p>${i.nameJuego}</p> 
            <p>${i.precio}</p>
        </div>                
        <div>
            ${i.carrito} 
            <svg width="20" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="#797C76" d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z" class="ci-primary"/>
            </svg>
        </div>    
    </div>
</div>   
    `
});

// Obtener el elemento SVG por su clase
const menuIcon = document.querySelector(".menu-icon");
const menu = document.getElementById("menu");
const userIcon = document.querySelector(".userIcon");
const user = document.getElementById("user");

// Agregar un evento al icono (SVG) para mostrar u ocultar el menú
menuIcon.addEventListener("click", () => {
    if (menu.classList.contains("hidden")) {
        // Mostrar el menú
        menu.classList.remove("hidden");
    } else {
        // Ocultar el menú
        menu.classList.add("hidden");
    }
});

userIcon.addEventListener("click", () => {
    if (user.classList.contains("hidden2")) {
        // Mostrar el menú
        user.classList.remove("hidden2");
    } else {
        // Ocultar el menú
        user.classList.add("hidden2");
    }
});


// Obtén todos los elementos SVG con la misma clase
const iconosSVG = document.querySelectorAll(".icono-carrito");
const nuevoSVG = `
<svg height="35" viewBox="0 0 512 512" width="35" xmlns="http://www.w3.org/2000/svg"><circle cx="176" cy="416" r="32"/><circle cx="400" cy="416" r="32"/><path d="m456.8 120.78a23.92 23.92 0 0 0 -18.56-8.78h-304.35l-6.13-34.78a16 16 0 0 0 -15.76-13.22h-64a16 16 0 0 0 0 32h50.58l45.66 258.78a16 16 0 0 0 15.76 13.22h256a16 16 0 0 0 0-32h-242.58l-5.64-32h241.66a24.07 24.07 0 0 0 23.56-19.29l28.8-144a24 24 0 0 0 -5-19.93z"/></svg>`;

// Función para manejar el clic en un icono SVG
function toggleIcon(iconElement, nuevoSVG) {
  let iconoEstado = "original";
  const svgOriginal = iconElement.innerHTML;

  iconElement.addEventListener("click", () => {
    if (iconoEstado === "original") {
      // Reemplazar el contenido del icono con el nuevo SVG
      iconElement.style.transform = "rotate(180deg)";

      // Reemplazar el contenido del icono con el nuevo SVG después de un breve retraso
      setTimeout(() => {
        iconElement.innerHTML = nuevoSVG;
        // Restablecer la transformación
        iconElement.style.transform = "rotate(0deg)";
        // Actualizar el estado del icono
        iconoEstado = "nuevo";
      }, 300); // 300 milisegundos (0.3 segundos) para que coincida con la duración de la transición CSS
    } else {
      // Aplicar una transformación al hacer clic en el icono
      iconElement.style.transform = "rotate(180deg)";

      // Restaurar el contenido del icono al SVG original después de un breve retraso
      setTimeout(() => {
        iconElement.innerHTML = svgOriginal;
        // Restablecer la transformación
        iconElement.style.transform = "rotate(0deg)";
        // Actualizar el estado del icono
        iconoEstado = "original";
      }, 300); // 300 milisegundos (0.3 segundos) para que coincida con la duración de la transición CSS
    }
  });
}

// Itera sobre los elementos SVG y aplica la funcionalidad a cada uno
iconosSVG.forEach((iconoElement) => {
  toggleIcon(iconoElement, nuevoSVG);
});





/*
// CARRITO
const iconoElement = document.querySelector(".icono-carrito");

// Definir el nuevo código SVG que deseas mostrar cuando se haga clic
const nuevoSVG = `
<svg height="35" viewBox="0 0 512 512" width="35" xmlns="http://www.w3.org/2000/svg"><circle cx="176" cy="416" r="32"/><circle cx="400" cy="416" r="32"/><path d="m456.8 120.78a23.92 23.92 0 0 0 -18.56-8.78h-304.35l-6.13-34.78a16 16 0 0 0 -15.76-13.22h-64a16 16 0 0 0 0 32h50.58l45.66 258.78a16 16 0 0 0 15.76 13.22h256a16 16 0 0 0 0-32h-242.58l-5.64-32h241.66a24.07 24.07 0 0 0 23.56-19.29l28.8-144a24 24 0 0 0 -5-19.93z"/></svg>`;

// Guardar el código SVG original en una variable
const svgOriginal = iconoElement.innerHTML;

// Variable para realizar un seguimiento del estado actual del icono
let iconoEstado = "original";

// Agregar un manejador de eventos al hacer clic en el icono
iconoElement.addEventListener("click", () => {
  if (iconoEstado === "original") {
    // Reemplazar el contenido del icono con el nuevo SVG
    iconoElement.style.transform = "rotate(180deg)";
    
    // Reemplazar el contenido del icono con el nuevo SVG después de un breve retraso
    setTimeout(() => {
      iconoElement.innerHTML = nuevoSVG;
      // Restablecer la transformación
      iconoElement.style.transform = "rotate(0deg)";
      // Actualizar el estado del icono
      iconoEstado = "nuevo";
    }, 300); // 300 milisegundos (0.3 segundos) para que coincida con la duración de la transición CSS
  } else {
    // Aplicar una transformación al hacer clic en el icono
    iconoElement.style.transform = "rotate(180deg)";
    
    // Restaurar el contenido del icono al SVG original después de un breve retraso
    setTimeout(() => {
      iconoElement.innerHTML = svgOriginal;
      // Restablecer la transformación
      iconoElement.style.transform = "rotate(0deg)";
      // Actualizar el estado del icono
      iconoEstado = "original";
    }, 300); // 300 milisegundos (0.3 segundos) para que coincida con la duración de la transición CSS
  }
});
*/
//LOADER
window.addEventListener('load', () => {
    const contenedor = document.querySelector('.contenedor');
    const loaderInner = document.querySelector('.loader-inner');
    const loaderText = document.querySelector('.loader-text');

    let porcentaje = 0;
    const intervalo = 100; // Actualiza el porcentaje cada 100 ms
    const duracion = 5000; // Duración total de 5 segundos
    const pasos = duracion / intervalo;

    const actualizarPorcentaje = () => {
        porcentaje += 100 / pasos;
        if (porcentaje <= 100) {
            loaderText.textContent = Math.round(porcentaje) + '%';
        } else {
            clearInterval(animacion);
            contenedor.style.opacity = 0;
            contenedor.style.visibility = 'hidden';
        }
    };

    const animacion = setInterval(actualizarPorcentaje, intervalo);
});