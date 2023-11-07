class Tablero {
    constructor(posX, posY, color, context, filas, columnas,anchoTablero, altoTablero, radio, id) {
        this.posX = posX;
        this.posY = posY;
        this.context = context;
        this.color = color;
        this.filas = filas;
        this.columnas = columnas;
        this.anchoTablero=anchoTablero;
        this.altoTablero=altoTablero;
        this.radio=radio;
        // Inicializa el tablero vacío
        this.tablero = Array(this.filas).fill().map(() => Array(this.columnas).fill(null));
        this.espacioX=this.anchoTablero/this.columnas;
        this.espacioY= this.altoTablero/this.filas;
        this.ganadorEncontrado=false;
        this.fichasParaGanar=id;
    }
    getPosX() {
        return this.posX;
    }

    getPosY() {
        return this.posY;
    }
    getwidth() {
        return this.anchoTablero;
    }

    draw() {
        this.context.fillStyle = this.color;
        this.context.fillRect(this.posX, this.posY, this.anchoTablero,this.altoTablero);
        this.context.fill();

        for (let f = 0; f < this.filas; f++) {
            for (let c = 0; c < this.columnas; c++) {
                const posX= this.posX + c * this.espacioX + this.espacioX/2;
                const posY= this.posY + f * this.espacioY + this.espacioY/2;                
                this.context.beginPath();
                this.context.fillStyle="rgba(112,175, 179, 1)";
                this.context.arc(posX ,posY, this.radio, 0, 2 * Math.PI);
                this.context.fill();
                this.context.closePath();
        

            }
        }
    }
    // Método para colocar una ficha en el tablero
    colocarFicha(ficha) {
        let mitadAncho= this.espacioX/2;
        let mitadAlto= this.espacioY/2;
        let columna = Math.floor((ficha.getPosX() - this.posX) / this.espacioX);

        // Busca desde abajo la primera fila disponible
        for (let fila = this.filas - 1; fila >= 0; fila--) {

            if (this.tablero[fila][columna] == null) {
                // Coloca la ficha en esa posición
                ficha.setUsada(true);
                this.tablero[fila][columna] = ficha;
                ficha.setPosition(this.posX + (columna * this.espacioX) + mitadAncho, this.posY + fila * this.espacioY + mitadAlto);
                this.corroborarGanador(ficha, fila, columna);
                if(this.ganadorEncontrado){
                    let felicitaciones = document.getElementById("felicitaciones");
                    felicitaciones.textContent = "Felicitaciones ganaste: " + ficha.getJugador();
                    let ganador= document.querySelector('.ganaste');
                
                    setTimeout(function () {
                        ganador.style.display = "flex";
                      }, 1500);
                }

                break;
            }
        }
        return this.ganadorEncontrado;
    }

    obtenerFichaEn(fila, columna) {
        return this.tablero[fila][columna];
    }

    corroborarGanador(ficha, fila, columna) {        
        if (this.verificarHorizontal(ficha, fila, columna)) {
            console.log("Horizontal- Gano el: " + ficha.getJugador());
            this.ganadorEncontrado = true;
            ficha.setBordeActivo(true);
            ficha.setColorBorde("#690011");
            ficha.setGrosorBorde(6);
            
        } else if (this.verificarVertical(ficha, fila, columna)) {
            console.log("Vertical- Gano el: " + ficha.getJugador());
            this.ganadorEncontrado = true;
            ficha.setBordeActivo(true);
            ficha.setColorBorde("#690011");
            ficha.setGrosorBorde(6);
          
        } else if (this.verificarDiagonal(ficha, fila, columna)) {
            console.log("Diagonal- Gano el: " + ficha.getJugador());
            this.ganadorEncontrado = true;
            ficha.setBordeActivo(true);
            ficha.setColorBorde("#690011");
            ficha.setGrosorBorde(6);
        
        }
    }    

    verificarHorizontal(ficha, fila, columna) {
        let jugador = ficha.getJugador();
        let contador = 1;
        let ganadoras= [];

        //verifica hacia la izquierda
        for (let i = columna - 1; i >= 0; i--) {
            if (fila >= 0 && fila < this.filas) {
                let fichaNueva = this.obtenerFichaEn(fila, i);
                if (fichaNueva != null && fichaNueva.getJugador() === jugador) {
                    contador++;
                    ganadoras.push(fichaNueva);
                    
                }
                else {
                    break;
                }
            }
        }

        //verifica hacia la derecha
        for (let i = columna + 1; i < this.columnas; i++) {
            if (fila >= 0 && fila < this.filas) {
                let fichaNueva = this.obtenerFichaEn(fila, i);
                if (fichaNueva != null && fichaNueva.getJugador() === jugador) {
                    contador++;
                    ganadoras.push(fichaNueva);
                }
                else {
                    break;
                }
            }
        }

        if (contador >= this.fichasParaGanar) {
            
            for(let i=0; i<ganadoras.length; i++){
                console.log(ganadoras[i]);
                ganadoras[i].setBordeActivo(true);
                ganadoras[i].setColorBorde("#690011");
                ganadoras[i].setGrosorBorde(6);
            }
            return true;
            }
        
        return false;
    }

   


    verificarVertical(ficha, fila, columna) {
        let jugador = ficha.getJugador();
        let contador = 1;
        let ganadoras=[];


        //verifica para arriba
        for (let i = fila - 1; i >= 0; i--) {
            if (i >= 0 && i < this.filas) {
                let fichaNueva = this.obtenerFichaEn(i, columna);
                if (fichaNueva != null && fichaNueva.getJugador() === jugador) {
                    contador++;
                    ganadoras.push(fichaNueva);
                }
                else {
                    break;
                }
            }
        }

        //verifica para abajo
        for (let i = fila + 1; i <= this.filas; i++) {
            if (i >= 0 && i < this.filas) {
                let fichaNueva = this.obtenerFichaEn(i, columna);
                if (fichaNueva != null && fichaNueva.getJugador() === jugador) {
                    contador++;
                    ganadoras.push(fichaNueva);
                }
                else {
                    break;
                }
            }
        }

        if (contador >= this.fichasParaGanar) {
            for(let i=0; i<ganadoras.length; i++){
                ganadoras[i].setBordeActivo(true);
                ganadoras[i].setColorBorde("#690011");
                ganadoras[i].setGrosorBorde(6);
            }
            return true;
            }
        
        return false;
    }

    verificarDiagonal(ficha, fila, columna) {
        let contador = 1;
        let ganadoras=[];
        // Verificar diagonal hacia arriba y la izquierda
        let i = fila - 1;
        let j = columna - 1;
        while (i >= 0 && j >= 0) {
            if (fila >= 0 && fila < this.filas) {
                let fichaNueva = this.obtenerFichaEn(i, j);
                if (fichaNueva != null && fichaNueva.getJugador() === ficha.getJugador()) {
                    contador++;
                    i--;
                    j--;
                    ganadoras.push(fichaNueva);
                } else {
                    break;
                }
            }


        }
        // Verificar diagonal hacia arriba y la derecha
        i = fila - 1;
        j = columna + 1;
        while (i >= 0 && j < this.columnas) {
            if (fila >= 0 && fila < this.filas) {
                let fichaNueva = this.obtenerFichaEn(i, j);
                if (fichaNueva != null && fichaNueva.getJugador() === ficha.getJugador()) {
                    contador++;
                    i--;
                    j++;
                    ganadoras.push(fichaNueva);
                } else {
                    break;
                }
            }

        }

        // Verificar diagonal hacia abajo y la izquierda
        i = fila + 1;
        j = columna - 1;
        while (i < this.filas && j >= 0) {
            if (fila >= 0 && fila < this.filas) {
                let fichaNueva = this.obtenerFichaEn(i, j);
                if (fichaNueva != null && fichaNueva.getJugador() === ficha.getJugador()) {
                    contador++;
                    i++;
                    j--;
                    ganadoras.push(fichaNueva);
                } else {
                    break;
                }
            }

        }


        // Verificar diagonal hacia abajo y la derecha
        i = fila + 1;
        j = columna + 1;
        while (i < this.filas && j < this.columnas) {
            if (fila >= 0 && fila < this.filas) {
                let fichaNueva = this.obtenerFichaEn(i, j);
                if (fichaNueva != null && fichaNueva.getJugador() === ficha.getJugador()) {
                    contador++;
                    i++;
                    j++;
                    ganadoras.push(fichaNueva);
                } else {
                    break;
                }
            }

        }


        if (contador >= this.fichasParaGanar) {
            for(let i=0; i<ganadoras.length; i++){
                ganadoras[i].setBordeActivo(true);
                ganadoras[i].setColorBorde("#690011");
                ganadoras[i].setGrosorBorde(6);
            }
            return true;
            }
        
        return false;
    }

}