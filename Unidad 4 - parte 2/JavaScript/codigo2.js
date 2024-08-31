
// Ejercicio 1

const contenedor = document.getElementById("ejercicio1")

const ejercicio1 = document.createElement(`div`)

ejercicio1.innerHTML = `
                        <div>
                            <h1>Ejercicio 1</h1>
                        </div>

                        <div style= "display: flex"> 
                            <div class="cuadrado" style= "background-color: red">
                                1
                            </div> 
                            <div class="cuadrado" style = "background-color: blue">
                                2
                            </div> 
                            <div class="cuadrado" style = "background-color: green">
                                3
                            </div> 
                        </div>`

                        if (contenedor){
                            contenedor.appendChild(ejercicio1)
                        }

                        

ejercicio1.addEventListener(`click`, () => {
    const cuadrados = document.getElementsByClassName(`cuadrado`)
    for (let i = 0; i < cuadrados.length; i++) {
        cuadrados[i].style.backgroundColor = obtenerColorAleatorio()
    }
})

const obtenerColorAleatorio = () => {
    let colores = ["yellow", "grey", "lightblue", "white", "black", "violet"]
    const indiceAleatorio = Math.floor(Math.random() * colores.length)
    return colores[indiceAleatorio]
}

// Ejercicio 2

const textArea = document.getElementById("textarea2")
const contador = document.getElementById("contador")

textArea.addEventListener('input', () => {
    const longitud = textArea.value.length
    contador.textContent = `Caracteres ${longitud}`
})

// Ejercicio 3

var alumnos = [
                {
                    nombre: 'Juan Gomez',
                    nota: 7
                }, 
                {
                    nombre: 'Pedro Rodriguez',
                    nota: 4
                }, 
                {
                    nombre: 'Roxana García',
                    nota: 8
                }, 
                {
                    nombre: 'Luciano Lopez',
                    nota: 5
                }, 
                {
                    nombre: 'Fernanda Gimenez',
                    nota: 6
                }, 
                {
                    nombre: 'Florencia Martinez',
                    nota: 10
                }, 
                {
                    nombre: 'Raul Sanchez',
                    nota: 7
                }, 
                {
                    nombre: 'Sandra Figueroa',
                    nota: 8
                }
            ];

function filtrarAprobados(array) {
    const aprobados = array.filter(el => el.nota >= 7)
    console.log(aprobados);
}


filtrarAprobados(alumnos)