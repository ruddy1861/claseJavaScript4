//ciclo o bucle For

// for(inicializamos;condicion;incremento){
//     codigo a ejectutar
// }

// for(let i = 1; i <=5; i++){
//     console.log(i);
// }
// //calcular  la suma de los primeros 10 numeros enteros 
// let suma=0;
//  for (let i=1; i <= 10 ; i++){
//     suma +=i;
//     console.log("la suma es: "+suma)
//  }


//  for (let i = 1; i <= 10; i++) {
//   console.log("Tabla del " + i + ":");

//   for (let j = 1; j <= 10; j++) {
//     let resultado = i * j;
//     console.log(i + " x " + j + " = " + resultado);
//   }

//   console.log(""); // Agregar una línea en blanco entre cada tabla
// }
// contar la cantidad de caracteres que hay en un trabalenguas
// let palabra="paranganicutimiricuaro"
// let cantidadCaracteres = 0;
// for (let i=0; i<palabra.length;i++){
//     cantidadCaracteres++;
// }
// console.log("La cantidad de caracteres de este trabalenguas es de: "+cantidadCaracteres)

// let texto ="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum amet vero doloremque temporibus? Earum amet a sequi alias eligendi laboriosam vel quibusdam omnis magnam. Eligendi dolores cumque aut sed necessitatibus."
// let contadorVocales=0;
// for(let i =0 ; i<texto.length;i++){
//     let caracter = texto[i].toLowerCase();
//     if(caracter==='a'||caracter==='e'||caracter==='i'||caracter==='o'||caracter==='u'){
//         contadorVocales++;
//     }
// }
// console.log("El texto tiene "+contadorVocales+" Vocales")
// const texto="desarzobispodeconstantinopolitarizar";
// for(let i=0; i< texto.length;i++){
//     console.log(texto[i]);
// }

//while
// while(condicion){

// }

// let contador =1;
// while(contador<=5){
//     console.log(contador)
//     contador++;
// }

// let contador =10;
// while(contador >=1){
//     console.log(contador);
//     contador--;
// }

// let suma= 0;
// let numero=1;
//  while(numero <=10){
//     suma += numero;
//     numero++
//     console.log("la suma es de: "+numero+"="+suma);
//  }
//  console.log("la suma es de: "+suma);

// let numero =1;
// while(numero<=10){
//     console.log("5 X "+numero+ " = "+(5*numero));
//     numero++;
// }


//funcion
function saludar(){
    console.log("Hola! como estas, eres BInvenido!!")
}
saludar();

function sumar(a,b){
    return a+b;
}

let resultado = sumar(5,9);
let resultado2= sumar(20,30);

console.log(resultado)
console.log(resultado2)

function invertirtexto(texto){
    let textoinvertido='';
    for(let i = texto.length -1;i>=0;i--){
        textoinvertido +=texto[i];
    }
    return textoinvertido;
}
let textoOriginal="HOLA";
let textoinvertido=invertirtexto(textoOriginal);
console.log(textoOriginal)
console.log(textoinvertido)


var entrada = prompt("Por favor, ingresa un nombre:");

// Expresión regular que verifica si la entrada contiene solo letras
var regex = /^[A-Za-z]+$/;

if (regex.test(entrada)) {
    console.log("Ingresaste un nombre válido:", entrada);
} else {
    console.log("La entrada no es válida. Por favor, ingresa solo letras.");
}


