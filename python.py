def ingresar_persona():
    nombre = input("Ingresa el nombre: ")
    apellido = input("Ingresa el apellido: ")
    dni = input("Ingresa el DNI: ")
    
    # Ingreso de teléfonos
    telefonos_input = input("Ingresa los teléfonos separados por comas: ")
    telefonos = [telefono.strip() for telefono in telefonos_input.split(",")]
    
    # Ingreso de hijos
    hijos_input = input("Ingresa los nombres de los hijos separados por comas: ")
    hijos = []
    if hijos_input.strip():  # Verificar si se ingresaron hijos
        hijos = [hijo.strip() for hijo in hijos_input.split(",")]
    
    # Crear la estructura para la persona
    persona = [nombre, apellido, dni, telefonos, hijos]
    return persona

def mostrar_todos_datos(base_datos):
    if not base_datos:
        print("No hay datos para mostrar.")
        return
    
    # Mostrar la matriz completa
    print("\nDatos almacenados:")
    print(base_datos)
    
    # Mostrar datos de manera más legible
    print("\nDatos ingresados:")
    for persona in base_datos:
        print(f"{persona[0]} {persona[1]}, DNI: {persona[2]}, Teléfonos: {len(persona[3])} teléfono(s), Hijos: {len(persona[4])}")

def filtrar_por_dni(base_datos):
    dni_buscar = input("Ingresa el DNI para filtrar: ")
    
    encontrado = False
    for persona in base_datos:
        if persona[2] == dni_buscar:
            print(f"\nDatos de {persona[0]} {persona[1]}:")
            print(f"DNI: {persona[2]}, Teléfonos: {len(persona[3])} teléfono(s), Hijos: {len(persona[4])}")
            encontrado = True
            break
    
    if not encontrado:
        print("No se encontró una persona con ese DNI.")

def mostrar_menu():
    print("\n--- Menú ---")
    print("1. Ingresar nueva persona")
    print("2. Mostrar todos los datos")
    print("3. Filtrar por DNI")
    print("4. Salir")
    return input("Elige una opción: ")

def main():
    base_datos = []  # Lista para almacenar todas las personas
    
    while True:
        opcion = mostrar_menu()
        
        if opcion == "1":
            persona = ingresar_persona()
            base_datos.append(persona)
            print("¡Persona agregada correctamente!")
        
        elif opcion == "2":
            mostrar_todos_datos(base_datos)
        
        elif opcion == "3":
            filtrar_por_dni(base_datos)
        
        elif opcion == "4":
            print("Gracias por usar el programa. ¡Hasta pronto!")
            break
        
        else:
            print("Opción no válida. Por favor, intenta de nuevo.")

main()