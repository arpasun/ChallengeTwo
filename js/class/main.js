//Seletores

const palabra = new Palabra();
const tablero = new Tablero;
const juego = new Juego;
const iniciarJuego = document.getElementById("button--IniciarJuego");
const agregarPalabra = document.getElementById("button--AgregarPalabra");
const nuveoJuego = document.getElementById("button--NuevoJuego");
const cancelarPalabra = document.getElementById("button--Cancelar");
const salirJuego = document.getElementById("button--Salir");

let errores = 8;
let numeroDeErrores = 7;
let letrasIncorrectas = [];
let letras = [];
let letraElegida = [];
let palabraSecreta = '';
let palabraCorrecta = "";

// Pantalla         ** PANTALLA PRINCIPAL **
// Botón "Iniciar el Juego"
iniciarJuego.onclick = () => {
  juego.iniciarJuego();
};

// Botón "Agregar Palabra"
agregarPalabra.onclick = () => {
  juego.agregarPalabra();
};

// Pantalla         ** PANTALLA JUEGO **
//      Botón "Nuevo Juego"
nuveoJuego.onclick = () => {
  juego.iniciarJuego();
};

// Pantalla         ** PANTALLA AGREGAR PALABRA **
// captura el id "btn-guardar", guarda la palabra agregada y inicia el juego
document.getElementById("button--Guardar").onclick = () => {
  let inputNuevaPalabra = document.getElementById('input--NuevaPalabra').value;
  palabra.guardarNuevaPalabra = inputNuevaPalabra;
  palabra.mostrarPalabra;
};
// Botón "Cancelar"
cancelarPalabra.onclick = () => {
  juego.salir();
};

//      Botón "Salir"
salirJuego.onclick = () => {
  juego.salir();
};

// Fin Pantallas

//---
// Juego captura la letra que el usuario escribió
document.onkeydown = (e) => {
  // pone la letra en letra mayuscula
  let letra = e.key.toUpperCase();
  //verifica si el usuario todavia no ha perdido
  if (letrasIncorrectas.length <= numeroDeErrores) {
    if (!juego.verificarLetraClicada(e.key) && juego.verificarLetra(e.keyCode)) {
      if (palabraSecreta.includes(letra)) {
        juego.agregarLetraCorrecta(palabraSecreta.indexOf(letra))
        for (let i = 0; i < palabraSecreta.length; i++) {
          if (palabraSecreta[i] === letra) {
            tablero.escribirLetraCorrecta(i, palabraSecreta)
            juego.verificarGanador(letra)
          }
        }
      }
      // si el usuario cometió más errores de los que son permitidos, 
      //llama las funciones que dibujan el ahorcado y exibe el mensaje de fin de juego
      else {
        if (!juego.verificarLetraClicada(e.key) && !juego.verificarGanador(letra))
          return
        tablero.dibujarAhorcado(errores)
        //console.log(errores);
        juego.verificarFinJuego(letra)
      }
    }
  }
  else {
    alert('has llegado al límite de letras incorrectas');
    juego.salir();
  }
};
//--