USE juego_cartas;

INSERT INTO `juego_cartas`.`category` (`category_id`, `category_name`, `category_description`) VALUES 
(1, 'Humor Crudo', 'Lleva el humor negro y el sarcasmo al límite.'),
(2, 'Sin Filtro', 'Respuestas absurdas o provocadoras, ideales para el tono de "sinvergüenza"'),
(3, 'Vergüenza Ajena', 'Situaciones embarazosas o ridículas.'),
(4, 'Fiesta y Descontrol', 'Momentos de caos social y humor relacionado con la vida nocturna.'),
(5, 'A Lo Gorrino', 'Situaciones subiditas de tono.')
AS new
ON DUPLICATE KEY UPDATE 
`category_name` = new.`category_name`,
`category_description` = new.`category_description`;

INSERT INTO `juego_cartas`.`cards` (`text`, `type`, `category_id`) VALUES
('Mi plan para arruinar una boda incluiría ______.', 'question', 1),
('La forma más ridícula de perder un trabajo sería ______.', 'question', 1),
('Si mi vida fuera un documental de Netflix, se llamaría ______.', 'question', 1),
('La mentira más elaborada que he contado para salir de un compromiso fue ______.', 'question', 1),
('Mi método más desastroso para ligar siempre implica ______.', 'question', 1),
('El regalo más inapropiado que he dado en una cena familiar fue ______.', 'question', 1),
('Si pudiera vengarse de mi jefe de la forma más absurda, haría ______.', 'question', 1),
('El secreto más vergonzoso que tengo guardado es ______.', 'question', 1),
('Mi técnica para escapar de una cita desastrosa sería ______.', 'question', 1),
('La situación más incómoda de mi vida fue ______.', 'question', 1),
('Mi plan más vergonzoso para impresionar a alguien incluye ______.', 'question', 1),
('Lo más inapropiado que he hecho en una cena familiar fue ______.', 'question', 1),
('Si mi vida fuera una película de serie B, definitivamente incluiría ______.', 'question', 1),
('El secreto más sucio que nunca confesaría en público es ______.', 'question', 1),
('Si tuviera que sobrevivir en un apocalipsis zombie, mi estrategia sería ______.', 'question', 1),
('Mi método más absurdo para resolver un conflicto siempre implica ______.', 'question', 1),
('El regalo más ridículo que he recibido fue ______.', 'question', 1),
('Si pudiera tener un superpoder completamente inútil, sería ______.', 'question', 1),
('Mi técnica más desastrosa para ligar incluye ______.', 'question', 1),
('La mentira más elaborada que he inventado para escapar de una situación comprometida fue ______.', 'question', 1),
('El método más enfermo para deshacerme de un cuerpo incluiría ______.', 'question', 1),
('Mi verdadero origen psicopático comenzó cuando ______.', 'question', 1),
('El secreto más oscuro que me hace reír en funerales es ______.', 'question', 1),
('Si tuviera que torturar psicológicamente a alguien, definitivamente usaría ______.', 'question', 1),
('Mi mayor talento para manipular gente mentalmente sería ______.', 'question', 1),
('El trauma familiar que me convirtió en un monstruo fue ______.', 'question', 1),
('La forma más retorcida de destruir una vida sin tocar un solo cabello sería ______.', 'question', 1),
('Mi método preferido para quebrar la cordura de alguien incluye ______.', 'question', 1),
('El experimento psicológico más enfermo que haría en mi familia sería ______.', 'question', 1),
('La razón por la que realmente sonrío cuando alguien sufre es ______.', 'question', 1);

INSERT INTO `juego_cartas`.`cards` (`text`, `type`, `category_id`) VALUES
('Un payaso con un informe médico de VIH.', 'answer', 1),
('Bailar como stripper frente a mis suegros.', 'answer', 1),
('Cómo sobreviví gracias a mis mentiras.', 'answer', 1),
('Un preservativo usado como corbata.', 'answer', 1),
('Fingir un ataque epiléptico en medio de un funeral.', 'answer', 1),
('Un vibrador de regalo para mi abuela.', 'answer', 1),
('Enviar su currículum a un centro psiquiátrico.', 'answer', 1),
('La vez que me encontraron masturbándome en un supermercado.', 'answer', 1),
('Fingir un embarazo de quintillizos.', 'answer', 1),
('Un pedo que sonó como una declaración de amor.', 'answer', 1),
('Un obituario falso publicado en el periódico local.', 'answer', 1),
('La estupidez colectiva de los influencers.', 'answer', 1),
('Un payaso que me observaba dormir.', 'answer', 1),
('Enviar un email con todos los trapos sucios de mis compañeros.', 'answer', 1),
('Un accidente "accidental" durante una cena familiar.', 'answer', 1),
('El cadáver del tío que nadie reclamó.', 'answer', 1),
('Saber exactamente qué decir para destruir la autoestima de alguien.', 'answer', 1),
('La foto comprometedora que todos guardan.', 'answer', 1),
('Predecir el momento exacto de la muerte de alguien.', 'answer', 1),
('El día que descubrí que mi familia no era mi familia.', 'answer', 1),
('Un paquete de cal viva y una sonrisa.', 'answer', 1),
('El día que descubrí que mis risas sonaban igual que sus gritos.', 'answer', 1),
('Un diario detallado de todos sus miedos más profundos.', 'answer', 1),
('Grabar cada momento de su decadencia y proyectarlo en su funeral.', 'answer', 1),
('Enviar fotos de su pasado que preferiría olvidar a todos sus contactos.', 'answer', 1),
('Una grabación de su peor pesadilla convirtiéndose realidad.', 'answer', 1),
('Reconstruir meticulosamente cada error de su vida.', 'answer', 1),
('El silencio de quien sabe que no hay escape.', 'answer', 1),
('Demostrar que todo lo que cree real es una mentira construida.', 'answer', 1),
('La satisfacción de ver morir sus últimas esperanzas.', 'answer', 1);

INSERT INTO `juego_cartas`.`cards` (`text`, `type`, `category_id`) VALUES
("¿Cuál fue el verdadero motivo por el que expulsaron a Adán y Eva del paraíso?", "question", 2),
("Mi peor vergüenza en una reunión familiar fue cuando alguien mencionó ______.", "question", 2),
("La nueva tendencia en redes sociales que nadie entiende es ______.", "question", 2),
("En mi carta de renuncia, simplemente escribí ______.", "question", 2),
("La peor película de Disney sería sobre ______.", "question", 2),
("El gran escándalo del Vaticano esta semana involucra ______.", "question", 2),
("El mejor método para ahuyentar vecinos molestos es ______.", "question", 2),
("La nueva dieta milagrosa incluye consumir una ración diaria de ______.", "question", 2),
("¿Qué causó el colapso del último grupo de WhatsApp al que pertenecí?", "question", 2),
("Los alienígenas decidieron no invadir la Tierra después de descubrir ______.", "question", 2),
("La última estrategia de marketing que funcionó sorprendentemente bien fue ______.", "question", 2),
("Lo último que deberías decirle a tu suegra es ______.", "question", 2),
("Si fuera presidente, mi primera ley sería prohibir ______.", "question", 2),
("La verdadera razón por la que los dinosaurios se extinguieron fue ______.", "question", 2),
("La peor idea para un reality show es ______.", "question", 2),
("En mi primera cita, lo único que no debería haber dicho fue ______.", "question", 2),
("Si los perros pudieran hablar, lo primero que dirían sería ______.", "question", 2),
("El apocalipsis empezó cuando alguien decidió combinar ______ con ______.", "question", 2),
("El nuevo emoji que está generando polémica representa ______.", "question", 2),
("Lo que realmente pasó en el Área 51 fue ______.", "question", 2),
("Lo único que siempre olvido llevar en vacaciones es ______.", "question", 2),
("El mejor regalo que podrías darle a alguien que odias es ______.", "question", 2),
("En mi entrevista de trabajo, todo iba bien hasta que mencioné ______.", "question", 2),
("Lo más extraño que encontré debajo del sofá fue ______.", "question", 2),
("La última gran innovación en tecnología será ______.", "question", 2),
("El peor consejo que alguien podría dar para ligar es ______.", "question", 2),
("Si existiera un concurso de cosas inútiles, el primer premio sería para ______.", "question", 2),
("En mi próxima fiesta, el tema será ______.", "question", 2),
("Lo único que definitivamente no debería estar en el menú de una boda es ______.", "question", 2),
("El mayor secreto que Elon Musk no quiere que sepas es ______.", "question", 2);

INSERT INTO `juego_cartas`.`cards` (`text`, `type`, `category_id`) VALUES
("Un influencer llorando por perder un patrocinio.", "answer", 2),
("Un luchador de sumo intentando hacer yoga en un ascensor.", "answer", 2),
("El peor chiste de un tío borracho en la boda.", "answer", 2),
("Una conversación de tres horas sobre horóscopos.", "answer", 2),
("Una cabra disfrazada de CEO.", "answer", 2),
("Un político que baila reguetón para ganar votos.", "answer", 2),
("El silencio incómodo después de un '¿Y tú qué opinas?'", "answer", 2),
("Una piñata en forma de jefe.", "answer", 2),
("Un grupo de mamás peleando en el chat de la escuela.", "answer", 2),
("Un tutorial de YouTube que empieza con 'esto no es ilegal si nadie se entera.'", "answer", 2),
("Una boda temática de 'Shrek' en el supermercado.", "answer", 2),
("Un robot que solo sabe insultar.", "answer", 2),
("Un día entero de memes malos sobre el clima.", "answer", 2),
("El peor concierto de karaoke en la historia de la humanidad.", "answer", 2),
("Un baño portátil en llamas durante un festival.", "answer", 2),
("La agenda secreta de un grupo de abuelitas.", "answer", 2),
("El manual del usuario para sobrevivir a una reunión de exalumnos.", "answer", 2),
("Un desfile de modas inspirado en ropa olvidada en el gimnasio.", "answer", 2),
("Una receta de cocina que requiere 12 pasos y 14 lágrimas.", "answer", 2),
("Un tipo con sombrero de aluminio gritando '¡Los extraterrestres me robaron el wifi!'", "answer", 2),
("Una oveja con complejo de influencer.", "answer", 2),
("Un dictador que quiere ser comediante de stand-up.", "answer", 2),
("Un carro lleno de payasos... atascado en el tráfico.", "answer", 2),
("Un debate entre dos niños sobre quién tiene más Pikachus.", "answer", 2),
("Un tutorial de maquillaje para zombis en LinkedIn.", "answer", 2),
("Unas vacaciones completas en el baño químico de un festival.", "answer", 2),
("Un pájaro gritando insultos a la gente en el parque.", "answer", 2),
("Un libro titulado 'Cómo arruinar tu vida en 5 simples pasos.'", "answer", 2),
("Un sombrero hecho completamente de pan.", "answer", 2),
("Una competencia de yoga extrema en gravedad cero.", "answer", 2);

INSERT INTO `juego_cartas`.`cards` (`text`, `type`, `category_id`) VALUES
('El momento en que mi dignidad murió definitivamente fue cuando ______.', 'question', 3),
('Mi presentación más desastrosa terminó con ______.', 'question', 3),
('El día que quise ser invisible después de ______.', 'question', 3),
('Mi mayor fail social que me perseguirá por años fue ______.', 'question', 3),
('La situación más incómoda con mis suegros comenzó cuando ______.', 'question', 3),
('El día que demostré ser el rey/reina del cringe total fue cuando ______.', 'question', 3),
('Mi mentira más ridícula se fue a pique cuando ______.', 'question', 3),
('El momento más brutal de mi vida social fue ______.', 'question', 3),
('Mi técnica de ligar que salió TERRIBLEMENTE mal incluía ______.', 'question', 3),
('La razón por la que mis amigos me recordarán por SIEMPRE es ______.', 'question', 3),
('El momento más vergonzoso en una cita que quise borrar de mi memoria fue ______.', 'question', 3),
('La razón por la que mis amigos no me dejan olvidar mi mayor metida de pata incluye ______.', 'question', 3),
('Mi método infalible para convertirme en el hazmerreír del momento es ______.', 'question', 3),
('Mi técnica más desastrosa para impresionar a alguien terminó con ______.', 'question', 3),
('La presentación en la que convertí todo en un desastre total ocurrió cuando ______.', 'question', 3),
('El momento más incómodo con mis suegros que me dejó traumado fue ______.', 'question', 3),
('Mi mayor fail en una reunión familiar que me gustaría borrar fue ______.', 'question', 3),
('La vez que mi intento de parecer cool salió completamente mal fue cuando ______.', 'question', 3),
('El día que perdí toda mi dignidad frente a mis compañeros de trabajo fue ______.', 'question', 3),
('Mi estrategia más patética para llamar la atención terminó con ______.', 'question', 3),
('La razón más ridicula por la que fui echado de un lugar público fue ______.', 'question', 3),
('El momento que demostré ser completamente inadaptado socialmente ocurrió cuando ______.*', 'question', 3),
('Mi intento más patético de impresionar a alguien terminó con ______.', 'question', 3),
('La presentación que convertí en un desastre absoluto comenzó cuando ______.', 'question', 3),
('El día que perdí toda mi dignidad frente a mis compañeros fue cuando ______.', 'question', 3),
('Mi técnica más desastrosa para llamar la atención incluía ______.', 'question', 3),
('La cita más vergonzosa de mi vida se desmoronó cuando ______.', 'question', 3),
('El momento más incómodo con mis suegros que me dejó traumado fue ______.', 'question', 3),
('Mi mayor metida de pata en una reunión familiar terminó con ______.', 'question', 3),
('La razón por la que mis amigos me siguen molestando años después es ______.', 'question', 3);

INSERT INTO `juego_cartas`.`cards` (`text`, `type`, `category_id`) VALUES
('Cantar karaoke completamente desnudo en la fiesta familiar.', 'answer', 3),
('Confundir a mi suegra con mi cita de Tinder.', 'answer', 3),
('Declarar mi amor eterno a un maniquí en el centro comercial.', 'answer', 3),
('Hacer un striptease involuntario frente al profesor de matemáticas.', 'answer', 3),
('Vomitar dentro de la torta en un cumpleaños.', 'answer', 3),
('Quedarse dormido y babear sobre el hombro del pasajero en un avión.', 'answer', 3),
('Confesar un crush frente a toda mi familia en la cena de Navidad.', 'answer', 3),
('Publicar un video sexual en el grupo familiar de WhatsApp.', 'answer', 3),
('Gritar "te amo" al cajero del supermercado.', 'answer', 3),
('Un baile erótico frente a mis profesores de la universidad.', 'answer', 3),
('Bailar break dance en el funeral de mi jefe.', 'answer', 3),
('Confundir la reunión de trabajo con un casting de OnlyFans.', 'answer', 3),
('Intentar seducir al robot aspirador de mi vecino.', 'answer', 3),
('Usar mis calzoncillos como mascarilla en plena pandemia.', 'answer', 3),
('Cantar un reggaetón completo en lengua de señas durante una boda.', 'answer', 3),
('Tener un orgasmo en medio de un examen oral.', 'answer', 3),
('Regalar un consolador a mi profesor de religión.', 'answer', 3),
('Hacerme un piercing en los genitales durante una transmisión en vivo.', 'answer', 3),
('Declarar mi amor eterno a un árbol en medio de un parque.', 'answer', 3),
('Comer un chicle usado que encontré bajo una mesa.', 'answer', 3),
('Cantar opera en el probador de ropa de un centro comercial.', 'answer', 3),
('Intentar hacer beatbox durante un examen final.', 'answer', 3),
('Declarar mi amor eterno a un robot de limpieza.', 'answer', 3),
('Practicar tai chi en medio de una fila del banco.', 'answer', 3),
('Usar mi diploma universitario como servilleta.', 'answer', 3),
('Hacerle una proposición de matrimonio a un maniquí.', 'answer', 3),
('Bailar ballet en la fila del supermercado.', 'answer', 3),
('Intentar ligar usando solo sonidos de animales.', 'answer', 3),
('Hacer mímica de una película de terror en una reunión de trabajo.', 'answer', 3),
('Convertir mi currículum en una canción de rap.', 'answer', 3);

INSERT INTO `juego_cartas`.`cards` (`text`, `type`, `category_id`) VALUES
("El momento en que supe que la fiesta estaba completamente fuera de control fue cuando apareció ______.", "question", 4),
("El mejor truco para entrar gratis a cualquier fiesta es ______.", "question", 4),
("La peor excusa que alguien dio para no pagar la cuenta en un bar fue ______.", "question", 4),
("En una fiesta, nunca es buena idea combinar alcohol con ______.", "question", 4),
("Mi amigo arruinó la despedida de soltero/a cuando mencionó ______.", "question", 4),
("Lo más extraño que he visto en un after es ______.", "question", 4),
("La nueva moda en las fiestas de famosos es organizar competencias de ______.", "question", 4),
("El momento en que supe que no debía haberme tomado ese último trago fue cuando empecé a ______.", "question", 4),
("El mayor escándalo en una boda siempre comienza con ______.", "question", 4),
("La única regla en mi casa para las fiestas es: nada de ______.", "question", 4),
("La peor forma de terminar una fiesta es con ______.", "question", 4),
("En el bar, todos quedaron en shock cuando alguien pidió ______.", "question", 4),
("Lo único que no debería mezclarse con alcohol es ______.", "question", 4),
("La nueva moda en los clubes nocturnos incluye sesiones de ______.", "question", 4),
("El brindis más incómodo de la noche incluyó una historia sobre ______.", "question", 4),
("En la boda de mi mejor amigo, todo se salió de control cuando apareció ______.", "question", 4),
("El after terminó oficialmente cuando alguien decidió ______.", "question", 4),
("Lo más loco que vi en un festival fue ______.", "question", 4),
("La mejor estrategia para evitar pagar la cuenta del bar es ______.", "question", 4),
("En la despedida de soltero, lo último que esperaba ver era ______.", "question", 4),
("La policía tuvo que llegar a la fiesta porque alguien estaba ______.", "question", 4),
("El mejor recuerdo de anoche es una foto mía con ______.", "question", 4),
("La regla más absurda del nuevo bar de moda es que debes llevar ______ para entrar.", "question", 4),
("Todo estaba tranquilo en la fiesta hasta que alguien sacó ______.", "question", 4),
("La peor playlist para una fiesta empieza con ______.", "question", 4),
("El after se volvió inolvidable cuando alguien apareció con ______.", "question", 4),
("En mi fiesta de cumpleaños, todos hablaron de ______.", "question", 4),
("Lo más ridículo que vi en la pista de baile fue ______.", "question", 4),
("La peor idea que tuvimos en la despedida de soltero/a fue alquilar ______.", "question", 4),
("El bar cerró temprano porque alguien intentó ______.", "question", 4);

INSERT INTO `juego_cartas`.`cards` (`text`, `type`, `category_id`) VALUES
("Un tipo tocando reguetón en una flauta desafinada.", "answer", 4),
("Un shot de tequila servido en un zapato usado.", "answer", 4),
("Un grupo de señoras mayores cantando reguetón a todo volumen.", "answer", 4),
("El primo que siempre aparece con un micrófono portátil.", "answer", 4),
("Una lámpara rota porque alguien intentó colgarse de ella.", "answer", 4),
("Un DJ que solo pone villancicos en pleno verano.", "answer", 4),
("Una pelea épica por quién se comió la última rebanada de pizza.", "answer", 4),
("Alguien declarando su amor eterno al mesero.", "answer", 4),
("Un tipo durmiendo en la bañera abrazado a un barril de cerveza.", "answer", 4),
("Unos mariachis que aparecen a las 4 a.m. sin que nadie los haya contratado.", "answer", 4),
("Un grupo de desconocidos jugando Twister en la sala.", "answer", 4),
("Una piñata llena de botellas de licor.", "answer", 4),
("Un tipo vestido de unicornio bailando en la mesa.", "answer", 4),
("Un karaoke de canciones infantiles... a las 3 de la mañana.", "answer", 4),
("El bartender intentando rapear mientras sirve tragos.", "answer", 4),
("Un concurso improvisado de breakdance en el jardín.", "answer", 4),
("Un amigo que decidió convertirse en filósofo después de tres cervezas.", "answer", 4),
("Un brindis por el ex de alguien... que estaba en la misma fiesta.", "answer", 4),
("Un gato con sombrero de fiesta y un vaso en la pata.", "answer", 4),
("Un grupo de personas gritando '¡Otra!' mientras alguien intenta apagar la música.", "answer", 4),
("Un perro con gafas de sol dirigiendo la fiesta.", "answer", 4),
("Un tipo que insiste en dar clases de zumba a las 2 a.m.", "answer", 4),
("Un caimán decorado con luces de neón.", "answer", 4),
("Una pelea a muerte con espadas de piscina inflables.", "answer", 4),
("Un karaoke donde todos cantan imitando a Shakira.", "answer", 4),
("Un batallón de patitos de goma flotando en la piscina.", "answer", 4),
("Un borracho jurando que puede hablar con fantasmas.", "answer", 4),
("Una máquina de humo que nunca se apagó.", "answer", 4),
("Un invitado vestido como un aguacate gigante.", "answer", 4),
("Una competencia de ver quién puede abrir una botella con el ombligo.", "answer", 4);

INSERT INTO `juego_cartas`.`cards` (`text`, `type`, `category_id`) VALUES
('La cosa más rara que he probado en la cama fue ______.', 'question', 5),
('Una vez me descubrieron haciendo ______.', 'question', 5),
('El lugar menos apropiado donde he tenido sexo es ______.', 'question', 5),
('Un fetiche que no sabía que tenía hasta que lo probé es ______.', 'question', 5),
('La excusa más absurda que di para no tener sexo fue ______.', 'question', 5),
('Un apodo raro que me han puesto en la cama es ______.', 'question', 5),
('Lo más salvaje que he hecho en una despedida de soltero/a fue ______.', 'question', 5),
('La vez que un juguete sexual casi arruina mi vida fue por ______.', 'question', 5),
('Una experiencia en la cama que terminó en un desastre fue ______.', 'question', 5),
('Un comentario que me dejó sin palabras en medio del acto fue ______.', 'question', 5),
('Lo que más me excita pero me da vergüenza admitir es ______.', 'question', 5),
('Una propuesta indecente que no pude rechazar fue ______.', 'question', 5),
('Mi mayor arrepentimiento en la cama fue ______.', 'question', 5),
('El peor lugar donde me han cachado en pleno acto fue ______.', 'question', 5),
('Una posición que nunca repetiré es ______.', 'question', 5),
('Mi mejor anécdota en un motel incluye ______.', 'question', 5),
('Una confesión incómoda que me hicieron en la cama fue ______.', 'question', 5),
('El peor consejo sexual que me han dado fue ______.', 'question', 5),
('Un desastre con lubricante que nunca olvidaré fue ______.', 'question', 5),
('Algo que debería darme pena, pero que me encantó hacer fue ______.', 'question', 5),
('Una experiencia sexual tan extraña que parece sacada de una película fue ______.', 'question', 5),
('Un accidente durante el sexo que me hizo reír sin parar fue ______.', 'question', 5),
('La peor reacción que tuve al probar algo nuevo en la cama fue ______.', 'question', 5),
('La frase más rara que he dicho durante el sexo fue ______.', 'question', 5),
('La peor decisión de moda que tomé en la cama fue ______.', 'question', 5),
('La cosa más tonta que me excita es ______.', 'question', 5),
('Una fantasía que todavía me da curiosidad probar es ______.', 'question', 5),
('Lo más extremo que he hecho por una noche de pasión fue ______.', 'question', 5),
('La excusa más rara que di para evitar un mal encuentro fue ______.', 'question', 5),
('Lo que pensé que sería sexy pero resultó ser  un desastre fue  ______.', 'question', 5);

INSERT INTO `juego_cartas`.`cards`(`text`, `type`, `category_id`) VALUES
('Un masaje con aceite caliente, pero sin las instrucciones.', 'answer', 5),
('Una mascarilla de chocolate que terminó en guerra campal.', 'answer', 5),
('Un disfraz de unicornio que no estaba en el plan.', 'answer', 5),
('El sofá de mis suegros, en pleno aniversario.', 'answer', 5),
('Comida en la cama... mala idea si tienes un perro.', 'answer', 5),
('Unas esposas que olvidé cómo abrir.', 'answer', 5),
('Una propuesta para hacer roleplay de Power Rangers.', 'answer', 5),
('Un columpio que se cayó con nosotros encima.', 'answer', 5),
('Una crema que picaba más de lo esperado.', 'answer', 5),
('Hablar de impuestos mientras estábamos en pleno.', 'answer', 5),
('Confundir lubricante con gel antibacterial.', 'answer', 5),
('Hacerlo en un trampolín… el desastre fue inevitable.', 'answer', 5),
('Un masaje con un rodillo de cocina... improvisado.', 'answer', 5),
('Una mordida en un lugar donde nadie debería morder.', 'answer', 5),
('Un disfraz de Darth Vader que no pegó nada.', 'answer', 5),
('Intentar usar crema batida, pero olvidé comprarla en spray.', 'answer', 5),
('Un vibrador que salió volando por la ventana.', 'answer', 5),
('Un jacuzzi que acabó inundando todo el baño.', 'answer', 5),
('Cantar en medio del acto y ser interrumpido por risas.', 'answer', 5),
('Tener a mi gato observándome todo el tiempo.', 'answer', 5),
('Meterme en un ascensor y quedar atrapado.', 'answer', 5),
('Intentar hacerlo en un kayak... no lo recomiendo.', 'answer', 5),
('Una vela aromática que quemó las sábanas.', 'answer', 5),
('Un salto desde el mueble que terminó en un golpe épico.', 'answer', 5),
('Una sábana de seda que nos hizo resbalar a ambos.', 'answer', 5),
('Tener que pedir ayuda para liberar una mano atrapada.', 'answer', 5),
('Un día en la playa que terminó con arena por todas partes.', 'answer', 5),
('Un disfraz de pirata con parche en el ojo… muy poco práctico.', 'answer', 5),
('Un edredón eléctrico que empezó a recalentar.', 'answer', 5),
('Pedir ayuda para ponerme un arnés y perder toda la magia.', 'answer', 5);

INSERT INTO `juego_cartas`.`players` (`player_name`, `email`, `password`) VALUES 
('Juan Pérez', 'juan.perez@example.com', '$2a$10$wikYqklu1hy0sFFJ1Hu81eidrFoAiP5wNvvQUgD0t5plLmI86o6/W'),
('María López', 'maria.lopez@example.com', '$2a$10$wikYqklu1hy0sFFJ1Hu81eidrFoAiP5wNvvQUgD0t5plLmI86o6/W'),
('Carlos Sánchez', 'carlos.sanchez@example.com', '$2a$10$wikYqklu1hy0sFFJ1Hu81eidrFoAiP5wNvvQUgD0t5plLmI86o6/W'),
('Ana Gómez', 'ana.gomez@example.com', '$2a$10$wikYqklu1hy0sFFJ1Hu81eidrFoAiP5wNvvQUgD0t5plLmI86o6/W'),
('Pedro Ramírez', 'pedro.ramirez@example.com', '$2a$10$wikYqklu1hy0sFFJ1Hu81eidrFoAiP5wNvvQUgD0t5plLmI86o6/W'),
('Lucía Fernández', 'lucia.fernandez@example.com', '$2a$10$wikYqklu1hy0sFFJ1Hu81eidrFoAiP5wNvvQUgD0t5plLmI86o6/W'),
('Miguel Torres', 'miguel.torres@example.com', '$2a$10$wikYqklu1hy0sFFJ1Hu81eidrFoAiP5wNvvQUgD0t5plLmI86o6/W'),
('Sofía Jiménez', 'sofia.jimenez@example.com', '$2a$10$wikYqklu1hy0sFFJ1Hu81eidrFoAiP5wNvvQUgD0t5plLmI86o6/W');

