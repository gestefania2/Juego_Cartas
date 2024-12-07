# 0.1.0 -
**Inicio del Proyecto: Base del Backend**
1. Se creó la estructura inicial del proyecto.
2. Configuración de la base de datos con MySQL utilizando Sequelize como ORM.
3. Creación de las tablas PLAYERS, CATEGORY y CARDS, junto con sus relaciones:
    -  Relación 1:N entre PLAYERS y CATEGORY.
    -  Relación 1:N entre CATEGORY y CARDS.
    -  Relación opcional 1:N entre PLAYERS y CARDS (para cartas personalizadas).
4. Configuración del entorno de desarrollo:
    -  Configuración de Docker para crear contenedores del backend y de MySQL.
    -  Archivo .env para gestionar las variables de entorno.
5. Implementación de endpoints básicos para interactuar con la base de datos:



**meter endpoints**



6. Configuración inicial de seguridad:
    -  Implementación de JWT para la autenticación.
    -  Clave secreta (SESSION_SECRET) añadida para sesiones.
# 0.2.0 - 
**Dinámica del Juego y API**

1. Implementación de lógica de backend para la mecánica del juego:
    -  Endpoint para generar las cartas iniciales del juego.
    -  Endpoint para refrescar las preguntas/respuestas dinámicamente.

2.  Configuración de docker-compose para facilitar el despliegue:
    -  Exposición de puertos para el backend (3000) y la base de datos (3308).
3.  Script para inicializar automáticamente la base de datos.

# 0.3.0 - 
**Mejoras en la Base de Datos y Autenticación**

1. Ampliación del sistema de autenticación:
    -  Registro de usuarios (POST /register).
    -  Inicio de sesión (POST /login) con generación de JWT.
2. Seguridad mejorada:
    -  Encriptación de contraseñas con bcrypt.
    -  Middleware para validar usuarios autenticados en rutas protegidas.

