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
    console.log('No hay datos para mostrar.');
    return;
  }

  // Mostrar la matriz completa
  console.log('\nDatos almacenados:');
  console.log(baseDatos);

  // Mostrar datos de manera más legible
  console.log('\nDatos ingresados:');
  for (const persona of baseDatos) {
    console.log(
      `${persona[0]} ${persona[1]}, DNI: ${persona[2]}, Teléfonos: ${persona[3].length} teléfono(s), Hijos: ${persona[4].length}`
    );
  }
}

function filtrarPorDNI(baseDatos) {
  const dniBuscar = prompt('Ingresa el DNI para filtrar: ');

  let encontrado = false;
  for (const persona of baseDatos) {
    if (persona[2] === dniBuscar) {
      console.log(`\nDatos de ${persona[0]} ${persona[1]}:`);
      console.log(
        `DNI: ${persona[2]}, Teléfonos: ${persona[3].length} teléfono(s), Hijos: ${persona[4].length}`
      );
      encontrado = true;
      break;
    }
  }

  if (!encontrado) {
    console.log('No se encontró una persona con ese DNI.');
  }
}

function mostrarMenu() {
  console.log('\n--- Menú ---');
  console.log('1. Ingresar nueva persona');
  console.log('2. Mostrar todos los datos');
  console.log('3. Filtrar por DNI');
  console.log('4. Salir');
  return prompt('Elige una opción: ');
}

function main() {
  const baseDatos = []; // Array para almacenar todas las personas

  while (true) {
    const opcion = mostrarMenu();

    if (opcion === '1') {
      const persona = ingresarPersona();
      baseDatos.push(persona);
      console.log('¡Persona agregada correctamente!');
    } else if (opcion === '2') {
      mostrarTodosDatos(baseDatos);
    } else if (opcion === '3') {
      filtrarPorDNI(baseDatos);
    } else if (opcion === '4') {
      console.log('Gracias por usar el programa. ¡Hasta pronto!');
      break;
    } else {
      console.log('Opción no válida. Por favor, intenta de nuevo.');
    }
  }
}

main();
