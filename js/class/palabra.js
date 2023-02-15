//export default class Palabras {
class Palabra {
    #palabras = ['ALURA', 'AHORCADO', 'HTML', 'ORACLE', 'JAVA', 'LOGICA', 'PROGRAMA', 'DESAFIO'];
    #palabraSecreta = "";

    constructor() {
    }
    /**
     * @param {(arg0: string) => void} nuevaPalabra
     * @param {string} inputNuevaPalabra
     */
    set guardarNuevaPalabra(inputNuevaPalabra) {
        // incluye la palabra que el usuario digitó en el array de las palabras a seren sorteadas
        if (inputNuevaPalabra !== "") {
            this.#palabras.push(inputNuevaPalabra.toUpperCase());
            alert('La palabra fue guardada');
            document.getElementById("article--Principal").className = "mostrar";
            document.getElementById("article--AgregarPalabra").className = "ocultar";
            document.getElementById('input--NuevaPalabra').value = "";
        }
        else {
            alert("Ninguna palabra ha sido digitada");
        }
    }

    get mostrarPalabra() {
        //muestra la palabra agregada por consola
        return console.log(this.#palabras);
    }

    get seleccionarPalabraSecreta() {
        palabraSecreta = '';
        console.log("!!" + this.#palabras);
        this.#palabraSecreta = this.#palabras[Math.floor(Math.random() * this.#palabras.length)];
        return palabraSecreta = this.#palabraSecreta;
    }

}