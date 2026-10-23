import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });
// 🚫 No eliminar las líneas de arriba ⬆️

// ✍️ Escribe tu código aquí 👇
interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const tasks: Task[] = [];
let nextTaskId = 1;
let running = true;

// Crea una tarea pendiente y prepara el siguiente ID.
const addTask = (title: string) => {
  tasks.push({
    id: nextTaskId,
    title: title,
    completed: false,
  });

  nextTaskId++;
  console.log('Tarea agregada.');
};

// Elimina la última tarea y muestra su título.
const removeTask = () => {
  const removedTask = tasks.pop();

  if (removedTask === undefined) {
    console.log('No hay tareas para eliminar.');
  } else {
    console.log(`Tarea eliminada: ${removedTask.title}`);
  }
};

// Lista cada tarea con su ID, título y estado.
const listTasks = () => {
  if (tasks.length === 0) {
    console.log('Todavía no hay tareas.');
    return;
  }

const formattedTasks = tasks.map(({ id, title, completed }) => {
  let status: string;

  if (completed) {
    status = 'completada';
  } else {
    status = 'pendiente';
  }

  return `[${id}] ${title} - ${status}`;
});
formattedTasks.forEach((line) => {
  console.log(line);
});
};


// Busca una tarea por su ID y, si existe, la marca como completada.
const markCompleted = (id: number) => {
  const task = tasks.find((task) => task.id === id);

  if (task !== undefined) {
    task.completed = true;
    console.log(`Tarea ${task.id}: ${task.title} completada.`);
  } else {
    console.log(`No se encontró la tarea con ID ${id}.`);
  }
};
// Devuelve una nueva lista con solo las tareas pendientes.
const filterPending = () => {
  return tasks.filter((task) => task.completed === false);
};
// Devuelve una nueva lista con solo las tareas completadas.
const filterCompleted = () => {
  return tasks.filter((task) => task.completed === true);
};
// Repite el menú hasta que el usuario elija salir.
while (running) {
  console.log('--- Menú de tareas ---');
  console.log('1. Agregar tarea');
  console.log('2. Eliminar última tarea');
  console.log('3. Listar tareas');
  console.log('4. Salir');
  console.log('5. Marcar tarea como completada');
  console.log('6. Ver tareas pendientes');
  console.log('7. Ver tareas completadas');

  const answer = await rl.question('Elige una opción: ');

  if (answer === '1') {
    const title = await rl.question('Escribe el título de la tarea: ');
    addTask(title);
  }

  if (answer === '2') {
    removeTask();
  }

  if (answer === '3') {
    listTasks();
  }

  if (answer === '4') {
    running = false;
  }

  if (answer === '5') {
  const idAnswer = await rl.question('Escribe el ID de la tarea: ');
  const id = Number(idAnswer);

  if (Number.isNaN(id)) {
    console.log('Escribe un ID numérico.');
  } else {
    markCompleted(id);
  }
}

  if (answer === '6') {
  const pendingTasks = filterPending();

  if (pendingTasks.length === 0) {
    console.log('No hay tareas pendientes.');
  } else {
    pendingTasks.forEach((task) => {
      console.log(`[${task.id}] ${task.title} - pendiente`);
    });
  }
}
  if (answer === '7') {
    const completedTasks = filterCompleted();

    if (completedTasks.length === 0) {
      console.log('No hay tareas completadas.');
    } else {
      completedTasks.forEach((task) => {
        console.log(`[${task.id}] ${task.title} - completada`);
      });
    }
  }
}

// 🚫 No eliminar las líneas de abajo ⬇️
rl.close();
