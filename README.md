# Sistema de Turnos.

El Sistema de Turnos es una aplicación diseñada para gestionar y asignar turnos de atención a clientes de manera equitativa y eficiente. Permite clasificar a los clientes en tres categorías: prioritario, buena gente y cliente normal, asignándoles un número de turno correspondiente. Los turnos son atendidos en orden, garantizando una atención justa para todos los clientes.

#Demo.

Puedes probar una demostración de la aplicación en vivo aquí https://asesorias-app.netlify.app/

Página principal de la aplicación 
(recursos/paginaPrincipal.png)



# Funcionalidades
Asignación de Turno según Categorías: Los clientes pueden ser clasificados en tres categorías: prioritario, buena gente y cliente normal. El sistema asigna automáticamente un número de turno a cada cliente según su categoría.

Visualización de Turnos en Pantalla: La aplicación muestra en pantalla la información de los turnos asignados, incluyendo el número de turno y el tiempo estimado de atención. Esto permite a los clientes conocer su posición en la cola de espera y planificar su tiempo de manera adecuada.

Cola de Turnos Llamados: Los turnos llamados por los asesores se muestran en una cola, lo que facilita el seguimiento del orden de atención y ayuda a evitar confusiones.

# Funcionalidades para Asesores:

Llamado de Turno: Los asesores pueden llamar al siguiente turno en la cola para ser atendido.

Volver a Llamar: En caso de que un cliente no se presente al ser llamado, el asesor puede volver a llamar su turno.

Marcar como No Atendido: Si un cliente no se presenta después de ser llamado varias veces, el asesor puede marcar su turno como no atendido para pasar al siguiente.

Marcar como Terminado: Una vez que se ha atendido al cliente, el asesor puede marcar su turno como terminado para liberar la atención para el siguiente cliente.

# Instalación

Para instalar y ejecutar el Sistema de Turnos en tu sistema local, sigue estos pasos:

1. Clona este repositorio en tu máquina local ejecutando el siguiente comando en tu terminal:

    git clone https://github.com/josuepolania/turnos.git

    Este comando descargará el código fuente del proyecto en tu computadora.

2. Navega al directorio del proyecto recién clonado ejecutando:
   
    cd turnos

    Esto te llevará al directorio del proyecto donde podrás trabajar con los archivos.

4. Instala las dependencias del proyecto ejecutando:

    npm install

5. Finalmente, para iniciar la aplicación en un entorno de desarrollo, ejecuta:

    npm run dev

    Esto iniciará el servidor de desarrollo y podrás acceder a la aplicación en tu navegador web.

¡Listo! Ahora el Sistema de Turnos debería estar funcionando en tu máquina local.


#Deploy.

La aplicación ha sido desplegada utilizando Netlify, lo que facilita su implementación y distribución.

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
