//Función para mostrar un cuadro de dialogo emergente
function mostrarMensaje(){
    alert("Hola Mundo");
}

//Variables
function imprimirVariables(){
    let nombre = "Rodrigo";
    let edad = 42
    console.log("nombre:", nombre)
    console.log("edad:", edad)
    //Forma moderna de concatenar cadenas
    console.log(`nombre: ${nombre}, edad ${edad}`)
    //Otros tipos de impresion
    console.error("Error")
    console.warn("Advertencia")
}

function arreglos(){
    //Arreglos
    let frutas = ['manzana','pera','banana'];
    //Bucle
    for(let f of frutas){
        console.log(f)
    }
    //Condicionales
    if (frutas[1] === 'pera'){
        console.log("La segunda fruta es una pera");
    }else{
     console.log('No es una pera');
    }
}
//Agregar evento a un elemento html
document.getElementById("btnSaludar").addEventListener(
    "click", function () {
       console.log("Hola!");
    }
);

//Modificar el HTML a traves del DOM
document.getElementById("btnAgregar").addEventListener(
    "click", () => {
        //Obtener el elemento "lista" (ul) del documento html
        let lista = document.getElementById("lista");
        //Creando un nuevo elemento html, li = list item
        let nuevoItem = document.createElement("li");
        //Obteniendo el total de items de la lista
        let totalItems = lista.childElementCount;
        //Agregando un contenido (texto) al item
        nuevoItem.textContent = `Item ${totalItems + 1}`;
        //Agregar item a la lista
        lista.appendChild(nuevoItem);
    }
)
