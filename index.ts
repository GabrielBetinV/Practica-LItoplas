// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

var dato = 10;
let dato2 = 11;
const dato3 = 3;

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
