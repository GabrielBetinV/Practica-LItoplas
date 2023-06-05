// Import stylesheets
import './style.css';

// Write TypeScript code!
//const appDiv: HTMLElement = document.getElementById('app');
//appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

// var dato = 10;
// let dato2 = 11;
// const dato3 = 3;

// // Inferencia de datos

// // Constante -> No se puede reasignar-cambiar
// const a = 10;

// //Variable -> Si se puede reasignar-cambiar
// let b = 10;

// // Siempre se debe agregar el tipo

// // Constante -> No se puede reasignar-cambiar
// const c: number = 10;

// //Variable -> Si se puede reasignar-cambiar
// let d: number = 10;

// // Tipo ANY, si quiero saber el tipo de este dato nos tocara
// // ir hasta la definicion para poder saber
// const e: any = 10;

// // Booleanos
// let isSuperman: boolean = true;
// let isBatman: boolean = false;

// // Forma para condiciones
// isSuperman = true && false;

// //console.log({ isSuperman });

// // Condicion con operador ternario
// isSuperman = 1 + 1 == 2 ? true : false;

// //console.log({ isSuperman });

// // Condicionales normales

// if (isSuperman) {
//   true;
// } else {
//   false;
// }
// //console.log({ isSuperman });

// // No es buena practica anidar en el operador ternario, asi
// isSuperman = 1 + 1 == 2 ? true : 10 < 10 ? true : false;

// //Tipo Numbers

// const countAvengers = '123A';
// const villanos = 20;
// let avengers = Number(countAvengers);

// //console.log(avengers);

// // if (avengers > villanos) {
// //   console.log('Estamos en problemas');
// // } else {
// //   console.log('Estamos a salvo');
// // }

// // Validar si es no es NAN para que evalue => !, es negacion
// if (!isNaN(avengers)) {
//   if (avengers > villanos) {
//     //console.log('Estamos en problemas');
//   }
// } else {
//   // console.log('Estamos a salvo');
// }

// //String

// const batman: string = 'Batman';
// const linternaVerde: string = 'Linterna Verde';
// const volcanNegro: string = `Heroe`;
// const poder: string = `Velocidad`;
// const edad: number = 35;

// //console.log('Yo soy ' + batman);

// // Concatenar con template string
// //console.log(`Yo soy ${linternaVerde} y mi poder es ${poder}
// //y tengo  ${edad}`);

// // any,

// const nombre: any = 'pedro';
// //console.log(nombre.charAt(0));

// // Arreglos

// const numbers = [1, 2, 3, 4, 5, 6];
// numbers.push('7');
// ////console.log(numbers);

// // Arreglo con dos tipos de datos
// const numbers2: (string | number)[] = [1, 2, 3, 4, 5, 6];
// numbers2.push('7');
// ///console.log(numbers2);

// // Restringir cantidad de digitos en numbers
// // Contar la dimension

// const codigo = 12345;
// //console.log(codigo.toString().length);

// // Tuplas, nos permiten agrupar vaalores de diferentes tipos

// const hero: [string, number, boolean] = ['Dr strange', 100, true];

// hero[0] = 'ironman';
// hero[1] = 50;
// hero[2] = false;
// console.log(hero[2]);

// // Enums
// enum AudioLevel {
//   min = 10,
//   medium,
//   max = 100,
// }

// console.log(AudioLevel);

// // Como acceder
// const currentAudio = AudioLevel.max;
// console.log(currentAudio);

// Interface
// interface Hero {
//   name: string;
//   age: number;
//   poder: number[];
//   func?: () => void;
//   address?: Address;
// }

// // Implementando la funcion
// let flash: Hero = {
//   name: 'Barri allen',
//   age: 24,
//   poder: [1, 2],
// };

// // Implementando la funcion con parametros opcionales
// let superman: Hero = {
//   name: 'clark kent',
//   age: 30,
//   poder: [2],
//   func: () => {},
// };

// // Un interface que sera utilizada dento de otra
// interface Address {
//   city: string;
// }

// Funciones tipo void

// function callBatman(): void {
//   console.log('Dentro de la funcion');
// }

// const call = callBatman();
// console.log(call);
