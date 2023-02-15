//export default class Juego {

class Juego {

    iniciarJuego() {
        errores = 8;
        numeroDeErrores = 7;
        letrasIncorrectas = [];
        letras = [];
        letraElegida = [];
        palabra.seleccionarPalabraSecreta;
        tablero.dibujarLineas(palabraSecreta);
        tablero.dibujarPiso();
        document.getElementById("article--Principal").className = "ocultar";
        document.getElementById("article--Juego").className = "ver";
        document.getElementById("menu--Horizontal-Off").className = "ocultar";
        document.getElementById("menu--Horizontal").className = "ver";
        //console.log("iniciar Juego");
    };

    salir() {
        //Despliega Pantalla Inicio
        document.getElementById("article--Principal").className = "mostrar";
        document.getElementById("article--Juego").className = "ocultar";
        document.getElementById("article--AgregarPalabra").className = "ocultar";
    }

    agregarPalabra() {
        //Despliega Pantalla Agregar Palabra
        document.getElementById("article--Principal").className = "ocultar";
        document.getElementById("article--AgregarPalabra").className = "mostrar";
    }

    recargar() {
        location.reload();
    }

    //Verificaciones

    verificarLetraClicada(key) {
        if (letras.length < 1 || letras.indexOf(key) < 0) {
            letras.push(key)
            return false
        }
        else {
            letras.push(key)
            return true
        }
    }

    //impide que teclas como shift y otras, sean consideradas errores y sean escritas
    verificarLetra(keyCode) {
        if (typeof keyCode === "number" && keyCode >= 65 && keyCode <= 90) {
            return true;
        } else {
            return false;
        }
    }

    agregarLetraCorrecta(i) {
        palabraCorrecta += palabraSecreta[i].toUpperCase()
    }

    agregarLetraIncorrecta(letter) {
        if (palabraSecreta.indexOf(letter) <= 0) {
            errores -= 1
        }
    }

    verificarFinJuego(letra) {
        //checa si la letra ha sido incluída en el array de  las letras correctas o incorrectas
        if (letraElegida.length < palabraSecreta.length) {
            //incluye las letras ya digitadas en el arrau
            letrasIncorrectas.push(letra);
            //valida se el usuário cometió el numero maximo de errores
            if (letrasIncorrectas.length > numeroDeErrores) {
                tablero.perdiste();
                setTimeout(juego.iniciarJuego, 2000);
            }
            else if (letraElegida.length < palabraSecreta.length) {
                juego.agregarLetraIncorrecta(letra)
                tablero.escribirLetraIncorrecta(letra, errores)
            }
        }
    }

    //Verifica si el usuario ha ganado
    verificarGanador(letra) {
        letraElegida.push(letra.toUpperCase());
        if (letraElegida.length == palabraSecreta.length) {
            tablero.ganaste();
            setTimeout(juego.recargar, 2000);
        }
    }

}