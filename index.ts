import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });
// 🚫 No eliminar las líneas de arriba ⬆️

// ✍️ Escribe tu código aquí 👇
let systemName: string = 'funvalproyects'
let version: number = 6.0
let userName: string = 'mikemcpro' 

console.log('==================================');
console.log ('', systemName, 'v', version);
console.log('¡Bienvenido', userName, '!');
console.log('la siguiente version será:', version + 1)
console.log('==================================');

// 🚫 No eliminar las líneas de abajo ⬇️
rl.close();