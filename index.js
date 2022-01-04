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

// const myArray1 = [12, 23, 43, 87, 21, 69];
// const myArray2 = [32, 87, 19, 37, 44, 96, 45231];

// function concat(array1, array2) {
//     let array3 = array1.concat(array2);

//     uniq = [...new Set(array3)];

//     uniq.sort(function(a, b) { return a - b })

//     return uniq;
// }

// console.log(concat(myArray1, myArray2));

// Crea una función que tome un objeto como parámetro. Remueve la propiedad
// “country” y su valor y muestra el resultado por consola. Por ejemplo:

// const myObj = { city: 'Sacramento', state: 'California', country: 'USA', continent: 'NorthAmerica' };

// delete myObj.country;

// console.log(myObj);

// Trabajando con el mismo array anterior, muestra por consola el valor de la propiedad
// “city”

// const myObj = { city: 'Sacramento', state: 'California', country: 'USA', continent: 'NorthAmerica' };

// console.log(myObj.city);

// Algunas de las propiedades de los siguientes objetos son strings vacíos.
// Reemplazalos por el valor “null”, empleando para ello una función que tome como
// parámetro dichos objetos. Muestra por consola el objeto resultante

// const myObj1 = { a: "a", b: "b", c: "" };
// const myObj2 = { a: "", b: "b", c: " ", d: "d" };
// const myObj3 = { a: "a", b: "b ", c: " ", d: "" };

// function replaceEmpty(object) {
//     for (value in object) {
//         if (object[value] == " " || object[value] == "") {
//             object[value] = null;
//         }
//     }

//     return object;
// }

// console.log(replaceEmpty(myObj1));
// console.log(replaceEmpty(myObj2));
// console.log(replaceEmpty(myObj3));

// Crea una función que tome como parámetros un array de objetos y un string. Agrega
// a cada uno de los objetos la propiedad “continent” que tome como valor el parámetro
// de string. Muestra por consola el nuevo array.

// ([{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia')
//([{ city: 'Stockholm', country: 'Sweden' }, { city: 'Paris', country: 'France' }], 'Europe')

// let myArray1 = [
//     { city: "Tokyo", country: "Japan" },
//     { city: "Bangkok", country: "Thailand" },
// ];
// const continent1 = "Asia";

// let myArray2 = [
//     { city: "Stockholm", country: "Sweden" },
//     { city: "Paris", country: "France" },
// ];
// const continent2 = "Europe";

// function addProperty(array, string) {

//     for (value of array) {
//         value.continent = string;
//     }

//     return array;
// }

// console.log(addProperty(myArray1, continent1));
// console.log(addProperty(myArray2, continent2));

// Dado el siguiente HTML, crea una función que, a través de la manipulación del
// DOM, cambie el color de fondo de los párrafos, cada uno con colores diferentes.


function setBackground() {
    document.body.querySelector("p").style.backgroundColor = "green";

}

// Dado el siguiente array de objetos, manipula el DOM para imprimir en el html como
// un h1 los valores de cada una de las propiedades del objeto.Tip: debes hacer uso de
// appendChild().

// const dogs = [
//     { name: "balto", type: "chihuaha" },
//     { name: "loli", type: "puddle" },
//     ];