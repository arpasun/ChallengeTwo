const _tablero = document.getElementById('display').getContext('2d');


//export default class Display {
class Tablero {

  dibujarLineas(palabraSecreta) {
    _tablero.lineWidth = 6;
    _tablero.lineCap = "round";
    _tablero.lineJoin = "round";
    _tablero.strokeStyle = "#0A3871";
    _tablero.clearRect(0, 0, 800, 600);
    _tablero.beginPath();
    let ancho = 0;
    ancho = 400 - (100 * (palabraSecreta.length / 2));
    for (let i = 0; i < palabraSecreta.length; i++) {
      _tablero.moveTo(10 + ancho + (100 * i), 500)
      _tablero.lineTo(90 + ancho + (100 * i), 500)
    }
    _tablero.stroke();
    _tablero.closePath();
    //console.log(palabraSecreta);
  }

  dibujarPiso() {
    _tablero.lineWidth = 8
    _tablero.lineCap = "round"
    _tablero.lineJoin = "round"
    _tablero.fillStyle = "#F3F5FC"
    _tablero.strokeStyle = "#0A3871"
    _tablero.beginPath();
    _tablero.moveTo(300, 400)
    _tablero.lineTo(500, 400)
    _tablero.stroke()
    _tablero.closePath()
  }
  escribirLetraCorrecta(index, palabraSecreta) {
    _tablero.font = 'bold 72px Inter';
    _tablero.lineWidth = 8
    _tablero.lineCap = "round"
    _tablero.lineJoin = "round"
    _tablero.fillStyle = "#0A3871"
    let ancho = 400 - (100 * (palabraSecreta.length / 2));
    let x = (25 + ancho + (100 * index))
    _tablero.fillText(palabraSecreta[index], x, 480);
    _tablero.stroke()
  }

  escribirLetraIncorrecta(letra, errorsLeft) {
    _tablero.lineWidth = 6
    _tablero.font = 'bold 40px Inter';
    _tablero.lineCap = "round"
    _tablero.lineJoin = "round"
    _tablero.fillStyle = "#0A3871"
    let x = (40 * (10 - errorsLeft)) - 100
    _tablero.fillText(letra, 250 + x, 560, 50)
    _tablero.font = 'bold 50px Inter';
    _tablero.fillStyle = "#e90606"
    _tablero.globalAlpha = 0.5;
    _tablero.fillText("/", 250 + x, 560, 50)
    _tablero.globalAlpha = 1;
  }


  dibujarAhorcado(puntaje) {
    _tablero.lineWidth = 8
    _tablero.lineCap = "round"
    _tablero.lineJoin = "round"
    _tablero.strokeStyle = "#0A3871"
    if (puntaje === 8) {
      //poste
      _tablero.moveTo(350, 400)
      _tablero.lineTo(350, 100)
    }
    if (puntaje === 7) {//soporte 
      _tablero.moveTo(350, 100)
      _tablero.lineTo(450, 100)
    }
    if (puntaje === 6) {//soga
      _tablero.moveTo(450, 100)
      _tablero.lineTo(450, 170)
    }
    if (puntaje === 5) {//cara
      _tablero.moveTo(480, 200)
      _tablero.arc(450, 200, 30, 0, Math.PI * 2)
    }
    if (puntaje === 4) {//cuerpo
      _tablero.moveTo(450, 230)
      _tablero.lineTo(450, 300)
    }
    if (puntaje === 3) {//pierna izq
      _tablero.moveTo(450, 300)
      _tablero.lineTo(410, 350)
    }
    if (puntaje === 2) {//pierna der
      _tablero.moveTo(450, 300)
      _tablero.lineTo(490, 350)
    }
    if (puntaje === 1) {//pierna izq
      _tablero.moveTo(450, 250)
      _tablero.lineTo(410, 300)
    }
    if (puntaje === 0) {//pierna der
      _tablero.moveTo(450, 250)
      _tablero.lineTo(490, 300)
    }
    _tablero.stroke()
    _tablero.closePath()
  }


  ganaste() {
    _tablero.font = '42px Anton';
    _tablero.lineWidth = 6;
    _tablero.lineCap = "round";
    _tablero.lineJoin = "round";
    _tablero.fillStyle = "green";
    _tablero.fillText("¡¡¡ Felicidades Ganaste !!!", 200, 50);
    document.getElementById("menu--Horizontal").className = "ocultar";
    document.getElementById("menu--Horizontal-Off").className = "mostrar";
  }

  perdiste() {
    _tablero.font = '42px Anton';
    _tablero.lineWidth = 6;
    _tablero.lineCap = "round";
    _tablero.lineJoin = "round";
    _tablero.fillStyle = "red";
    _tablero.fillText("Perdiste!", 330, 50);
    document.getElementById("menu--Horizontal").className = "ocultar";
    document.getElementById("menu--Horizontal-Off").className = "mostrar";
  }
}