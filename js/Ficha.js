class Ficha {
    constructor(posX, posY, context, img,jugador,radio,colorBorde) {
        this.posX = posX;
        this.posY = posY;
        this.context = context;
        this.image = new Image();
        this.image.src = img;
        this.image.onload = () => {
            this.draw();
        };
        this.usada = false;
        this.jugador = jugador;
        this.posXInicial = posX;
        this.posYInicial = posY;
        this.radio=radio;
        this.colorBorde=colorBorde;
        this.grosorBorde=2;
        this.bordeActivo=false;
    }

    draw() {

            this.context.beginPath();
            this.context.arc(this.posX, this.posY, this.radio, 0, 2 * Math.PI);
            
            if(this.bordeActivo){
                this.context.strokeStyle = this.colorBorde; 
                this.context.lineWidth = this.grosorBorde;
                this.context.stroke();
                this.grosorBorde=0;
                this.setBordeActivo(false);
            }
          
            this.context.closePath();          
          
            this.context.save();
            this.context.clip();
            this.context.drawImage(this.image, this.posX - this.radio, this.posY - this.radio, this.radio * 2, this.radio * 2);
            this.context.restore();
        
      }
      
      setBordeActivo(nuevo){
        this.bordeActivo=nuevo;
      }

      setGrosorBorde(nuevo){
        this.grosorBorde=nuevo;
      }
    
    setColorBorde(nuevo){
        this.colorBorde=nuevo;
    }


    getPosXInicial() {
        return this.posXInicial;
    }

    getPosYInicial() {
        return this.posYInicial;
    }



    getPosition() {
        return {
            x: this.getPosX(),
            y: this.getPosY()
        };
    }




    getJugador() {
        return this.jugador;
    }

    setPosition(x, y) {
        this.posX = x;
        this.posY = y;
    }

    getPosX() {
        return this.posX;
    }

    getPosY() {
        return this.posY;
    }

    getContext() {
        return this.context;
    }

    setColor(color) {
        this.color = color;
    }

    isPointInside(x, y) {

        let _x = this.posX - x;
        let _y = this.posY - y;
        return Math.sqrt(_x * _x + _y * _y) < this.radio;

    }
    setUsada(usada) {
        this.usada = usada;
    }

    getUsada() {
        return this.usada;
    }

}