// Selecciona todas las casillas
const casillas = document.querySelectorAll(".casilla")

//Variable para llevar al turno actual
let turno = "x";
let juegoActivo = true;

// Agrega un evento de clic a cada casilla
casillas.forEach((casilla, index) => {
    casilla.addEventListener("click", () =>{
        if (!juegoActivo) return;
        if (casilla.textContent === "") {
            casilla.textContent = turno;

            if (verificarGanador()) {
                alert("¡Ha ganado " + turno + "!");
                juegoActivo = false;
                return;
            }

            // cambiar el turno con un if
            if (turno === "x") {
                turno = "o";
            } else{
                turno = "x";
            }
        }
    });
});

function verificarGanador(){
    const combinacionesGanadoras = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    return combinacionesGanadoras.some(combinacion => {
        const [a, b, c] = combinacion;
        return (
            casillas[a].textContent === turno &&
            casillas[b].textContent === turno &&
            casillas[c].textContent === turno
        );
    });
}