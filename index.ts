// Import stylesheets
import './style.css';

// Write TypeScript code!
//const appDiv: HTMLElement = document.getElementById('app');
//appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

var dato = 10;
let dato2 = 11;
const dato3 = 3;

// Inferencia de datos

// Constante -> No se puede reasignar-cambiar
const a = 10;

//Variable -> Si se puede reasignar-cambiar
let b = 10;

// Siempre se debe agregar el tipo

// Constante -> No se puede reasignar-cambiar
const c: number = 10;

//Variable -> Si se puede reasignar-cambiar
let d: number = 10;

// Tipo ANY, si quiero saber el tipo de este dato nos tocara
// ir hasta la definicion para poder saber
const e: any = 10;

// Booleanos
let isSuperman: boolean = true;
let isBatman: boolean = false;

// Forma para condiciones
isSuperman = true && false;

console.log({ isSuperman });

// Condicion con operador ternario
isSuperman = 1 + 1 == 2 ? true : false;

console.log({ isSuperman });

// Condicionales normales

if (isSuperman) {
  true;
} else {
  false;
}
console.log({ isSuperman });

// No es buena practica anidar en el operador ternario, asi
isSuperman = 1 + 1 == 2 ? true : 10 < 10 ? true : false;
