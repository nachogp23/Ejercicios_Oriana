//EJERCICIOS JAVASCRIPT

// Crea una función que tome como parámetro un número. Si es un número entero (sin
// decimales) muestra por consola true. Si no, muestra por consola false.

// function esEntero(num) {
//     if (num % 1 == 0) {
//         console.log(num + " es un número entero");
//     } else {
//         console.log(num + " no es un número entero");
//     }
// }

// Crea una función que tome como parámetros dos strings, puedes llamarlos a y b. Si
// a contiene b, añade b al principio de a. Si no, añade b al final. Por ejemplo

// function myFunction(a, b) {

//     if (a.includes(b) == true) {
//         return b + a;
//     } else {
//         return a + b;
//     }
// }

// console.log(myFunction("marisco", "isco"));

//Crea una función que tome como parámetro un número y lo divida en dígitos
//individuales dentro de un array. Tip: puedes usar el método split();

// function separarDigitos(num) {
//   return num.toString().split("");
// }

// console.log(separarDigitos(243));

// Crea una función que tome como parámetro un array. Si todos los elementos del
// array son estrictamente iguales, muestra por consola true, de lo contrario muestra
// false.

// function sonIguales(array) {

//     let sonIguales;

//     for (let i = 0; i < array.length - 1; i++)

//         if (array[i] === array[i + 1]) {
//             sonIguales = true;

//         } else {
//             sonIguales = false;
//             break
//         }
//     return sonIguales;
// }

// const myArray = [1, 1, 1, 1];

// console.log(sonIguales(myArray));

//Dado un array de números, muestra por consola un array con dichos números
//ordenados en forma descendente.

// const numeros = [13, 23, 1, 55, 0];

// numeros.sort(function(a, b) { return b - a });

// console.log(numeros);

// Dado un array de strings, muestra por consola un array con sus valores ordenados
//alfabéticamente

// const myArray = ["snow", "esqui", "futbol", "basquet", "zebra"];

// myArray.sort();

// console.log(myArray);

// Crea una función que tome como parámetro un array de strings y muestra por
//consola el string más largo

// myArray = ["hola", "pep", "Antonioe", "hipolito", "pi"];

// function longestString(array) {
//     let longest = "";
//     for (let i = 0; i < array.length - 1; i++) {
//         if (array[i].length > array[i + 1].length) {
//             longest = array[i];
//         } else {
//             longest = array[i + 1];
//         }
//     }
//     return longest;
// }

// console.log(longestString(myArray));

// Crea una función que tome dos arrays de números como parámetros. Une ambos
// arrays, remueve valores duplicados (si hay alguno) y ordena los números en orden
// ascendente.

const myArray1 = [12, 23, 43, 87, 21, 69];
const myArray2 = [32, 87, 19, 37, 44, 96, 45231];

function concat(array1, array2) {
    let array3 = array1.concat(array2);

    uniq = [...new Set(array3)];

    uniq.sort(function(a, b) { return a - b })

    return uniq;
}

console.log(concat(myArray1, myArray2));