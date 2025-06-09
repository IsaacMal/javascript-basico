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