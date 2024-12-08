# Sin Vergüenza: Una App Móvil de juego de cartas para conectar y divertirse
**Ríete sin preocuparte por lo políticamente correcto. Un juego con un toque pícaro y atrevido.**


## 🃏 Descripción General

"Sin Vergüenza" es una aplicación móvil para jugar a cartas, diseñada como herramienta de juego e interacción en grupo. E objetivo es fomentar la interacción personal fuera del entorno digital y pasar un buen rato con amigos mientras se compite en creatividad y originalidad.

- Pensada para que cualqueir usuario (jugador) entre sin logearse y pueda jugar con las cartas que da la app por defecto. 
- Se establecerá una opción de registro. El usuario desde aquí podrá crear sus propias cartas y categorías, pudiendolas modificar y borrar.


## 🎲 Mecánica Del Juego

**Determinación de Turnos Iniciales**:

- Cada jugador lanzará dos dados.
- Se sumará la tirada de los dados, y el orden de los turnos se  establecerá de mayor a menor puntuación.
- El jugador con la mayor puntuación será el primero en escoger una carta respuesta de entre las 5 posibles, el de menor por lo contrario, será el último.

**Turnos Posteriores**:

- A partir de la primera ronda, el ganador de cada partida será el primero en escoger carta y el turno continuará en el sentido de las agujas del reloj.

**¿Quién Gana Cada Partida?**:

- Se seleccionará al ganador mediante una votación en tiempo real entre los jugadores.
- La respuesta más original, según la mayoría, será declarada la ganadora.

## 😂 Dinámica Del Juego
El juego está basado en preguntas y respuestas, inspirado en Cartas Contra la Humanidad, pero con una innovación: la incorporación de categorías temáticas.

**Selección de Opciones Iniciales**:

- Los jugadores determinan el número de participantes se aconseja un máximo de 8 jugadores por partida para que sea más dinámico y un mínimo de 3.
- Eligen la categoría de juego, que define el conjunto de preguntas y respuestas.

**Flujo de Juego**:

- La aplicación generará una carta pregunta y 5 respuestas y sumará una carta a partir del segundo jugador. Ejemplo: Si somos 4 jugadores cuando pidamos cartas de una categoria a la api el endpoint nos proporcionará una carta pregunta y 5 cartas respuesta iniciales más 3 (8 cartas respuesta).

- El jugador que está en turno revisa las respuestas disponibles y selecciona una.
- La respuesta elegida se registra (apuntada en papel).
- Este proceso continúa hasta que todos los jugadores hayan hecho sus elecciones.

**Sistema de Votación y Ganador**:

Una vez seleccionadas todas las respuestas, los jugadores votan presencialmente por la respuesta más original.
La votación define al ganador de la partida, quien inicia el próximo turno en el siguiente ronda.

**Opciones Dinámicas**:

Los jugadores pueden refrescar las preguntas o respuestas en cualquier momento si desean generar nuevas opciones.

## 📊 Estructura De La Base De Datos

**Tablas y Estructuras**

1. PLAYERS: Almacena información de los jugadores.

    **Columnas**:
    - **player_id** (INT, Primary Key): Identificador único del jugador.
    - **player_name** (VARCHAR(50)): Nombre del jugador.
    - **email** (VARCHAR(100)): Correo electrónico del jugador.
    - **password** (VARCHAR(100)): Contraseña en formato seguro. "HASH"

2. CATEGORY: Almacena las categorías disponibles para las cartas.

    **Columnas**:
    - **category_id** (INT, Primary Key): Identificador único de la categoría.
    - **category_name** (VARCHAR(100)): Nombre de la categoría.
    - **category_description** (VARCHAR(400)): Descripción de la categoría.
    - **player_id** (INT, Foreign Key): Relación con el jugador creador o responsable.

3. CARDS: Almacena las cartas que serán utilizadas en el juego, asociadas a las categorías.

    **Columnas**:
    - **card_id** (INT, Primary Key): Identificador único de la carta.
    - **text** (VARCHAR(300)): Texto de la carta (pregunta o respuesta).
    - **type** (ENUM): Define si la carta es de tipo "pregunta" o "respuesta".
    - **category_id** (INT, Foreign Key): Relación con la categoría correspondiente.
    - **player_id** (INT, Foreign Key): Relación con el jugador que creó la carta.

**Relaciones entre Tablas**

![Diagrama de la base de datos](assets/database-diagram.png)

- players ↔ category: Un jugador puede estar relacionado con múltiples categorías mediante player_id, pero una categoría solo puede estar asociada a un jugador. (1 a N)

- category ↔ cards: Cada categoría puede tener múltiples cartas asociadas mediante category_id, pero una carta solo puede estar asociada a una categoría. (1 a N)

- players ↔ cards: Un jugador puede crear múltiples cartas, relacionado mediante player_id, pero cada carta está asociada a un solo jugador. (1 a N)


En este caso las tablas se unen con líneas discontinuas porque la relación entre las entidades no es estricta o siempre presente. Una de las entidades puede estar relacionada de forma opcional con la otra.


## 🖥️ Tecnologías Utilizadas

- **Backend**:
- JavaScript  
- Sequelize
- Node.js    
- Express.js  
- MySQL (Base de datos) 
- Docker 


## 🛠️ Instalación Y Configuración 

**Requisitos imprescindibles**

(Para descargar/clonar el proyecto)
- **[Git](git-scm.com.)** 

(Para poder ejecutarlo)
- **[Visual Studio Code](https://code.visualstudio.com/download)** (ten en cuenta tu sistema operativo y procesador)
- **[Node.js](https://nodejs.org/)** (v14 o superior)
- **[MySQL](https://www.mysql.com/)** (v5.7 o superior)



1. Abrir Terminal
   
- Abre la terminal (bash) el directorio donde quieres clonar el repositorio 

  Ej: cd Proyectos

2. Clonar Repositorio 
- Una vez estes en la carpeta donde quieres clonar el repositorio escribe en terminal (bash):

git clone git@github.com:gestefania2/Juego_Cartas.git

3. Abrir proyecto en Visual Studio Code

- code Juego_Cartas

4. Abre una terminal (bash) en el proyecto e instala las dependencias, escribe:

- npm install

5. Configurar las variables de entorno:
- Crea un archivo dentro del proyecto "Juego_Cartas" en Visual Studio Code que se llame `.env` siguiendo el archivo de referencia de `.env. example`:

    APP_HOST=sinverguenza
    APP_PORT=3000
    DB_HOST=sinverguenzadb
    DB_PORT=3308
    DB_USER=stef
    DB_PASSWORD=12345
    DB_DATABASE=juego_cartas
    DB_ROOT_PASSWORD=12345
    DB_DIALECT=mysql 
    SESSION_SECRET=clave_secreta
    JWT_SECRET=sinverguenza*45

6. Inicia docker para poner los contenedores en marcha (backend y base de datos)
- Desde el Visual Studio Code abre una nueva terminal (bash) y escribe:

docker compose up --build


## 📡 Endpoints De La API

La interfaz de momento estará disponible como API para obtener información en la {{base_url}}: `http://localhost:3000` desde POSTMAN https://www.postman.com/downloads/ 

1. **CARDS**
- {{base_url}}/card/qa/category_id/total_players `Obtiene una pregunta y las respuestas por número de jugadores` (GET)
- {{base_url}}/card/list `Obtiene todas las tarjetas (preguntas y respuestas) de cualquier categoría` (GET)
- {{base_url}}/card/card_id `Obtiene una tarjeta aleatoria por ID (preguntas y respuestas)` (GET)

2. **CATEGORIES**
- {{base_url}}/category/list `Obtiene todas las categorías` (GET)
- {{base_url}}/category/category_id `Obtiene la categoria por ID de categoría` (GET)

3. **PLAYERS**
- {{base_url}}/player/card/list?category_id&text&type `Obtiene todas las cartas que ha creado el jugador` (GET)
- {{base_url}}/player/card/new `Crear una carta para una categoría` (POST)
- {{base_url}}/player/update/card/card_id `Actualizar una carta creada`(PUT)
- {{base_url}}/player/delete/card/card_id `Borrar una carta creada`(DEL)
- {{base_url}}/register `Registrase` (POST)
- {{base_url}}/login `Logearse` (POST)



## 🚧 Estado Del Proyecto

**En desarrollo activo**: Falta por implementar la parte del front-end con React para que el juego sea visual e interactivo y poder conseguir que la experiencia de usuario en la interfaz sea ópttima.

## Desarrolladora del Back-End
- **[Estefanía](https://github.com/gestefania2)**
