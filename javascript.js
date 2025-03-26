function ingresarPersona() {
  const nombre = prompt('Ingresa el nombre: ');
  const apellido = prompt('Ingresa el apellido: ');
  const dni = prompt('Ingresa el DNI: ');

  // Ingreso de teléfonos
  const telefonosInput = prompt('Ingresa los teléfonos separados por comas: ');
  const telefonos = telefonosInput
    .split(',')
    .map((telefono) => telefono.trim());

  // Ingreso de hijos
  const hijosInput = prompt(
    'Ingresa los nombres de los hijos separados por comas: '
  );
  let hijos = [];
  if (hijosInput.trim()) {
    // Verificar si se ingresaron hijos
    hijos = hijosInput.split(',').map((hijo) => hijo.trim());
  }

  // Crear la estructura para la persona
  const persona = [nombre, apellido, dni, telefonos, hijos];
  return persona;
}

function mostrarTodosDatos(baseDatos) {
  if (baseDatos.length === 0) {
    alert('No hay datos para mostrar.');
    return;
  }

  // Mostrar la matriz completa
  alert('Datos almacenados:\n' + JSON.stringify(baseDatos, null, 2));

  // Construir mensaje legible para alert
  let mensaje = 'Datos ingresados:\n';
  for (const persona of baseDatos) {
    mensaje += `${persona[0]} ${persona[1]}, DNI: ${persona[2]}, Teléfonos: ${persona[3].length} teléfono(s), Hijos: ${persona[4].length}\n`;
  }
  alert(mensaje);
}

function filtrarPorDNI(baseDatos) {
  const dniBuscar = prompt('Ingresa el DNI para filtrar: ');

  let encontrado = false;
  let mensaje = '';

  for (const persona of baseDatos) {
    if (persona[2] === dniBuscar) {
      mensaje = `Datos de ${persona[0]} ${persona[1]}:\n`;
      mensaje += `DNI: ${persona[2]}, Teléfonos: ${persona[3].length} teléfono(s), Hijos: ${persona[4].length}`;
      encontrado = true;
      break;
    }
  }

  if (!encontrado) {
    alert('No se encontró una persona con ese DNI.');
  } else {
    alert(mensaje);
  }
}

function mostrarMenu() {
  const menuText =
    '--- Menú ---\n' +
    '1. Ingresar nueva persona\n' +
    '2. Mostrar todos los datos\n' +
    '3. Filtrar por DNI\n' +
    '4. Salir';

  return prompt(menuText + '\n\nElige una opción: ');
}

function main() {
  const baseDatos = []; // Array para almacenar todas las personas

  while (true) {
    const opcion = mostrarMenu();

    if (opcion === '1') {
      const persona = ingresarPersona();
      baseDatos.push(persona);
      alert('¡Persona agregada correctamente!');
    } else if (opcion === '2') {
      mostrarTodosDatos(baseDatos);
    } else if (opcion === '3') {
      filtrarPorDNI(baseDatos);
    } else if (opcion === '4') {
      alert('Gracias por usar el programa. ¡Hasta pronto!');
      break;
    } else {
      alert('Opción no válida. Por favor, intenta de nuevo.');
    }
  }
}

main();
