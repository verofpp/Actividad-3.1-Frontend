Actividad 3.1 Cristhofer Solarte 30.959.561, Verónica Parra 30.600.365

Pasos para el despliegue de la actividad en Visual Studio Code:
Clonar el Repositorio: Abre Visual Studio Code. Ve al menú "View" y selecciona "Command Palette" o presiona Ctrl + Shift + P. Escribe "Git: Clone" y selecciona la opción. Ingresa la URL del repositorio, selecciona una carpeta local para clonar el proyecto. Espera a que se complete la clonación.
Abrir el Proyecto en Visual Studio Code: En Visual Studio Code, ve al menú "File" y selecciona "Open Folder". Selecciona la carpeta donde clonaste el repositorio y haz clic en "Abrir".
Instalar Dependencias: Abre la terminal en Visual Studio Code. Ve al menú "Terminal" y selecciona "New Terminal" o presiona Ctrl + Shift + ñ.
Ejecuta el siguiente comando para instalar las dependencias del proyecto: npm install
Configuración de la Base de Datos: Accede a MySQL phpMyAdmin en tu gestor de base de datos local, puedes usar Xampp. Actualiza los valores de host, user, password y database con los datos de tu conexión a la base de datos. Crea una nueva base de datos de nombre "basededatosfrontend", importa la base de datos ubicada en los archivos del proyecto.
Iniciar el Servidor:
En la terminal, ejecuta el siguiente comando para iniciar el servidor: npm run dev
Acceder a la Aplicación: Abre tu navegador web y visita [http://localhost:3000] para acceder a la aplicación.
