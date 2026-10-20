import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });
// 🚫 No eliminar las líneas de arriba ⬆️

// ✍️ Escribe tu código aquí 👇
const tasks: string[] = [];

let running: boolean = true;

while (running) {
  console.log('--- Menú de tareas ---');
  console.log('1. Agregar tarea');
  console.log('2. Eliminar última tarea');
  console.log('3. Listar tareas');
  console.log('4. Salir');

  const answer = await rl.question("Elige una opción: ");
  if (answer === '1') {
  const title = await rl.question('Escribe el título de la tarea: ');
  tasks.push(title);
  console.log('Tarea agregada.');
}

if (answer === '2') {
  const removedTask = tasks.pop();

  if (removedTask === undefined) {
    console.log('No hay tareas para eliminar.');
  } else {
    console.log(`Tarea eliminada: ${removedTask}`);
  }
}

if (answer === '3') {
  if (tasks.length === 0) {
    console.log('Todavía no hay tareas.');
  } else {
    for (let i = 0; i < tasks.length; i++) {
      console.log(`${i + 1}. ${tasks[i]}`);
    }
  }
}

  if (answer === '4') {
  running = false;
}
}

// 🚫 No eliminar las líneas de abajo ⬇️
rl.close();