-- =========================================
-- ADMIN
-- =========================================

INSERT INTO usuario
(username, password, rol)
VALUES
('ADMIN', '012877', 'ADMIN');


-- =========================================
-- CATEGORÍAS
-- =========================================

INSERT INTO categoria (nombre)
VALUES ('Lugares Turísticos Culturales');

INSERT INTO categoria (nombre)
VALUES ('Lugares Turísticos Naturales');

INSERT INTO categoria (nombre)
VALUES ('Restaurantes');

INSERT INTO categoria (nombre)
VALUES ('Hoteles');

INSERT INTO categoria (nombre)
VALUES ('Movilidades');


-- =========================================
-- LUGARES TURÍSTICOS CULTURALES
-- =========================================

INSERT INTO lugar
(nombre, descripcion, historia, imagen, ubicacion, latitud, longitud, categoria_id)
VALUES
(
'Plaza Mayor de Ayacucho',
'Centro histórico principal de la ciudad de Ayacucho.',
'En el corazón de Ayacucho, la Plaza Mayor guarda siglos de historia entre portales de piedra, templos coloniales y antiguas casonas que aún conservan la esencia de Huamanga.
Cada rincón refleja el pasado cultural de una ciudad conocida por su arte, tradición y profunda fe religiosa. Durante Semana Santa, miles de personas llenan la plaza para 
presenciar procesiones, música y celebraciones que convierten el lugar en uno de los escenarios más impresionantes del Perú. Al caer la noche, las luces de la catedral, el 
movimiento de turistas y el ambiente tradicional hacen que este espacio cobre vida de una manera única y especial.',
'plaza-mayor-ayacucho.jpg',
'Centro Histórico - Huamanga',
-13.16042,
-74.22570,
1
);

INSERT INTO lugar
(nombre, descripcion, historia, imagen, ubicacion, latitud, longitud, categoria_id)
VALUES
(
'Catedral Basílica de Ayacucho',
'Templo religioso colonial ubicado frente a la Plaza Mayor.',
'Frente a la Plaza Mayor de Ayacucho se levanta la imponente Catedral Basílica, uno de los templos más representativos y antiguos de la ciudad. Sus enormes torres, campanas y
detalles coloniales han sido testigos de celebraciones religiosas, acontecimientos históricos y tradiciones que forman parte de la identidad ayacuchana. En su interior
descansan altares tallados, imágenes religiosas y obras de arte que reflejan la profunda herencia católica de Huamanga. Durante Semana Santa, la catedral se convierte en el 
centro espiritual de multitudinarias procesiones y ceremonias que reúnen a fieles y visitantes de distintas partes del mundo.',
'catedral-ayacucho.jpg',
'Plaza Mayor - Huamanga',
-13.160723,
-74.225162,
1
);

INSERT INTO lugar
(nombre, descripcion, historia, imagen, ubicacion, latitud, longitud, categoria_id)
VALUES
(
'Complejo Arqueológico Wari',
'Antigua ciudad preinca y capital del imperio Wari.',
'Entre los paisajes andinos de Ayacucho se extienden las antiguas ruinas del Complejo Arqueológico Wari, considerado uno de los centros urbanos más importantes del antiguo Perú.
Mucho antes del surgimiento de los incas, esta ciudad fue la capital del poderoso imperio Wari, una civilización que logró expandir su influencia por gran parte de los Andes.
Sus enormes muros de piedra, caminos y recintos aún conservan el misterio de una cultura avanzada que destacó por su organización, arquitectura y desarrollo político. Caminar
por este lugar es recorrer siglos de historia y descubrir cómo una de las primeras grandes civilizaciones andinas dejó su huella en el corazón de Ayacucho.',
'complejo-wari.jpg',
'Quinua - Huamanga',
-13.061689,
-74.198126,
1
);

INSERT INTO lugar
(nombre, descripcion, historia, imagen, ubicacion, latitud, longitud, categoria_id)
VALUES
(
'Santuario Histórico Pampa de Ayacucho',
'Lugar histórico donde se consolidó la independencia del Perú.',
'En las extensas pampas de Quinua, rodeadas por los paisajes andinos de Ayacucho, se encuentra el Santuario Histórico Pampa de Ayacucho, escenario de uno de los acontecimientos 
más importantes de Sudamérica. Fue en este lugar donde se libró la histórica Batalla de Ayacucho en 1824, enfrentamiento que consolidó la independencia del Perú y puso fin al 
dominio español en gran parte del continente. Hoy, el imponente Obelisco de la Pampa recuerda el valor y sacrificio de quienes participaron en aquella decisiva lucha por la 
libertad. Caminar por este santuario es revivir un capítulo fundamental de la historia peruana mientras se contempla la tranquilidad y grandeza de los Andes ayacuchanos.',
'pampa-ayacucho-obelisco.jpg',
'Quinua - Ayacucho',
-13.042175,
-74.131216,
1
);

INSERT INTO lugar
(nombre, descripcion, historia, imagen, ubicacion, latitud, longitud, categoria_id)
VALUES
(
'Pueblo de Quinua',
'Pueblo tradicional reconocido por su cerámica artesanal.',
'Entre montañas y calles empedradas, el tradicional pueblo de Quinua conserva la esencia histórica y artesanal de Ayacucho. Sus pequeñas casas blancas con techos de teja y 
balcones coloridos crean un ambiente tranquilo que parece detenido en el tiempo. Este pueblo es reconocido por el talento de sus artesanos, especialmente por la famosa cerámica 
quinua, elaborada a mano con técnicas heredadas de generación en generación. En cada taller y mercado artesanal se pueden encontrar iglesias, toritos, escenas costumbristas y 
piezas que representan la cultura andina. Caminar por Quinua es descubrir un lugar lleno de tradición, historia y arte en el corazón de los Andes ayacuchanos.',
'pueblo-quinua.jpg',
'Quinua - Ayacucho',
-13.048975,
-74.139273,
1
);

INSERT INTO lugar
(nombre, descripcion, historia, imagen, ubicacion, latitud, longitud, categoria_id)
VALUES
(
'Vilcashuamán',
'Complejo arqueológico inca de gran valor histórico.',
'En lo alto de los Andes ayacuchanos se encuentra Vilcashuamán, una antigua ciudad inca que aún conserva la grandeza y el poder del Tahuantinsuyo. Sus enormes construcciones de 
piedra, plazas ceremoniales y templos muestran la importancia política y religiosa que tuvo este lugar durante el imperio incaico. Entre sus estructuras más impresionantes 
destaca el Templo del Sol y la Luna, levantado sobre una inmensa plataforma ceremonial que domina el paisaje andino. Con la llegada de los españoles, muchas de sus 
edificaciones fueron transformadas, dejando una mezcla única entre historia inca y colonial. Recorrer Vilcashuamán es adentrarse en uno de los tesoros arqueológicos más 
importantes y misteriosos de Ayacucho.',
'vilcashuaman.jpg',
'Vilcashuamán - Ayacucho',
-13.653054,
-73.953785,
1
);

INSERT INTO lugar
(nombre, descripcion, historia, imagen, ubicacion, latitud, longitud, categoria_id)
VALUES
(
'Templo de Santo Domingo',
'Iglesia colonial representativa del centro histórico.',
'En una de las tradicionales calles del centro histórico de Ayacucho se levanta el Templo de Santo Domingo, una de las iglesias coloniales más representativas y antiguas de la 
ciudad. Sus muros de piedra, campanarios y detalles arquitectónicos reflejan el legado religioso y cultural que marcó la historia de Huamanga durante la época virreinal. En su 
interior se conservan altares, imágenes y elementos artísticos que muestran la profunda influencia del arte religioso andino y español. A lo largo de los años, este templo ha sido escenario de celebraciones, procesiones y encuentros que forman parte de las costumbres ayacuchanas. Caminar frente a esta iglesia es descubrir un rincón lleno de 
historia, fe y tradición en el corazón de Ayacucho.',
'templo-santo-domingo.jpg',
'Centro Histórico - Huamanga',
-13.158289,
-74.225865,
1
);

INSERT INTO lugar
(nombre, descripcion, historia, imagen, ubicacion, latitud, longitud, categoria_id)
VALUES
(
'Templo San Cristóbal',
'Iglesia tradicional considerada una de las más antiguas de la ciudad.',
'En una de las zonas más tradicionales de Ayacucho se encuentra el Templo San Cristóbal, considerado uno de los templos más antiguos e históricos de la ciudad. Sus antiguas 
paredes de piedra y su arquitectura colonial guardan siglos de historia relacionados con la fe y las costumbres de Huamanga. A lo largo del tiempo, esta iglesia ha sido testigo 
de importantes celebraciones religiosas y acontecimientos que marcaron la vida cultural ayacuchana. Desde sus alrededores también es posible apreciar hermosas vistas de la 
ciudad y sentir la tranquilidad característica de los barrios tradicionales. Visitar este templo es recorrer parte del pasado colonial y espiritual que aún permanece vivo en 
Ayacucho.',
'templo-san-cristobal.jpg',
'Huamanga - Ayacucho',
-13.168034,
-74.227482, 
1
);

INSERT INTO lugar
(nombre, descripcion, historia, imagen, ubicacion, latitud, longitud, categoria_id)
VALUES
(
'Barrio Santa Ana',
'Barrio artesanal reconocido por sus talleres tradicionales.',
'Entre calles tradicionales y talleres llenos de color se encuentra el Barrio Santa Ana, uno de los lugares más representativos del arte popular ayacuchano. Desde hace 
generaciones, este barrio ha sido hogar de artesanos dedicados a la elaboración de retablos, textiles, tallados y cerámicas que forman parte de la identidad cultural de 
Ayacucho. Caminar por sus calles permite escuchar el trabajo de los talleres y observar cómo las técnicas ancestrales continúan vivas en manos de maestros artesanos. Durante 
las festividades, el barrio se llena de música, tradición y expresiones culturales que muestran el verdadero espíritu huamanguino. Visitar Santa Ana es descubrir el corazón 
artesanal y cultural de Ayacucho en cada rincón de sus antiguas calles.',
'barrio-santa-ana.jpg',
'Huamanga - Ayacucho',
-13.169735, 
-74.230130,
1
);

INSERT INTO lugar
(nombre, descripcion, historia, imagen, ubicacion, latitud, longitud, categoria_id)
VALUES
(
'Jirón 28 de Julio',
'Calle histórica y comercial del centro de Ayacucho.',
'En el corazón del centro histórico de Ayacucho, el Jirón 28 de Julio reúne tradición, movimiento y la esencia cotidiana de la ciudad. Sus antiguas casonas, balcones coloniales 
y comercios tradicionales reflejan la historia y el crecimiento de Huamanga a lo largo de los años. Durante el día, cientos de personas recorren esta emblemática calle entre 
tiendas, cafeterías, artesanías y restaurantes típicos que muestran la cultura ayacuchana. Por las noches, las luces y el ambiente del centro convierten este jirón en uno de 
los espacios más concurridos y representativos de la ciudad. Caminar por el Jirón 28 de Julio es vivir de cerca la historia, la tradición y el movimiento comercial de Ayacucho.',
'jiron-28-julio.jpg',
'Centro Histórico - Huamanga',
-13.163063, 
-74.227008,
1
);

INSERT INTO lugar
(nombre, descripcion, historia, imagen, ubicacion, latitud, longitud, categoria_id)
VALUES
(
'Ciudad de Huanta',
'Ciudad conocida como la Esmeralda de los Andes.',
'Rodeada de montañas verdes, ríos y paisajes naturales, la ciudad de Huanta es conocida como la Esmeralda de los Andes por su clima agradable y la belleza de sus alrededores. 
Sus calles tranquilas, plazas tradicionales y costumbres conservan el espíritu acogedor de una de las provincias más representativas de Ayacucho. A lo largo de los años, Huanta 
se ha convertido en un importante destino turístico gracias a sus fiestas costumbristas, su gastronomía y sus impresionantes recursos naturales. Muy cerca de la ciudad se 
encuentran cataratas, bosques y rutas ideales para quienes buscan aventura y contacto con la naturaleza. Visitar Huanta es descubrir un rincón lleno de tradición, historia y 
paisajes únicos en el corazón de los Andes ayacuchanos.',
'ciudad-huanta.jpg',
'Huanta - Ayacucho',
-12.939857,
-74.247911, 
1
);

INSERT INTO lugar
(nombre, descripcion, historia, imagen, ubicacion, latitud, longitud, categoria_id)
VALUES
(
'Mirador de Acuchimay',
'Mirador urbano con vista panorámica de Ayacucho.',
'Desde lo alto de las colinas que rodean la ciudad, el Mirador de Acuchimay ofrece una de las vistas más impresionantes y panorámicas de Ayacucho. Durante el día, desde este 
lugar es posible contemplar las calles de Huamanga, sus templos coloniales y el paisaje andino que envuelve toda la ciudad. Al caer la tarde, el mirador se convierte en un 
espacio perfecto para observar el atardecer mientras las luces urbanas comienzan a iluminar el valle ayacuchano. Su ambiente tranquilo y su ubicación privilegiada lo han 
convertido en uno de los puntos favoritos para turistas, fotógrafos y visitantes. Llegar a Acuchimay es descubrir Ayacucho desde las alturas y apreciar la belleza única de la 
ciudad de las iglesias.',
'mirador-acuchimay.jpg',
'Huamanga - Ayacucho',
-13.171432, 
-74.221781,
1
);

INSERT INTO lugar
(nombre, descripcion, historia, imagen, ubicacion, latitud, longitud, categoria_id)
VALUES
(
'Cueva de Pikimachay',
'Sitio arqueológico asociado a ocupación humana antigua.',
'Entre los paisajes rocosos de Ayacucho se encuentra la Cueva de Pikimachay, uno de los sitios arqueológicos más importantes para comprender los primeros rastros de presencia 
humana en el Perú. En este lugar, investigadores hallaron restos y herramientas de piedra que revelan cómo habrían vivido antiguos pobladores hace miles de años en los Andes 
ayacuchanos. Su nombre, que en quechua significa “cueva de las pulgas”, guarda el misterio y la antigüedad de una época donde el ser humano comenzaba a adaptarse a estas 
tierras. Rodeada de montañas y silencio natural, la cueva se ha convertido en un símbolo histórico para la arqueología peruana. Visitar Pikimachay es viajar hacia los orígenes 
más antiguos de la historia humana en Ayacucho.',
'cueva-pikimachay.jpg',
'Pacaycasa - Ayacucho',
-13.038618, 
-74.228067,
1
);


-- =========================================
-- LUGARES TURÍSTICOS NATURALES
-- =========================================

INSERT INTO lugar
(nombre, descripcion, historia, imagen, ubicacion, latitud, longitud, categoria_id)
VALUES
(
'Aguas Turquesas de Millpu',
'Pozas naturales de aguas cristalinas color turquesa.',
'En medio de los paisajes andinos de Ayacucho aparecen las impresionantes Aguas Turquesas de Millpu, un conjunto de pozas naturales que sorprenden por el intenso color 
cristalino de sus aguas. Rodeadas de montañas, cascadas y formaciones rocosas, estas piscinas naturales se han convertido en uno de los destinos más visitados y fotografiados 
de la región. Durante ciertas épocas del año, el color turquesa del agua se vuelve aún más brillante, creando un paisaje que parece sacado de otro lugar del mundo. El sonido 
del río y la tranquilidad de la naturaleza convierten la visita en una experiencia perfecta para quienes buscan aventura y conexión con el entorno andino. Llegar a Millpu es 
descubrir uno de los tesoros naturales más espectaculares de Ayacucho.',
'aguas-turquesas-millpu.jpg',
'Huancaraylla - Ayacucho',
-13.749513, 
-74.131146,
2
);

INSERT INTO lugar
(nombre, descripcion, historia, imagen, ubicacion, latitud, longitud, categoria_id)
VALUES
(
'Reserva Nacional Pampa Galeras',
'Área natural protegida reconocida por la conservación de vicuñas.',
'En las extensas pampas altoandinas de Ayacucho se encuentra la Reserva Nacional Pampa Galeras, uno de los refugios naturales más importantes para la conservación de la vicuña 
en el Perú. Este inmenso paisaje rodeado de montañas y cielos abiertos protege a miles de vicuñas que recorren libremente las llanuras andinas, mostrando la belleza de uno de 
los animales más representativos de los Andes. Durante años, este lugar ha sido clave para evitar la desaparición de esta especie, reconocida por la finura y valor de su lana. 
El silencio de la naturaleza, el aire puro y la posibilidad de observar fauna silvestre convierten la visita en una experiencia única para viajeros y amantes de la vida 
natural. Recorrer Pampa Galeras es descubrir la riqueza ecológica y la majestuosidad de los paisajes ayacuchanos.',
'pampa-galeras.jpg',
'Lucanas - Ayacucho',
-14.750259, 
-74.382211,
2
);

INSERT INTO lugar
(nombre, descripcion, historia, imagen, ubicacion, latitud, longitud, categoria_id)
VALUES
(
'Bosque de Puyas de Raimondi',
'Paisaje altoandino con presencia de la imponente Puya de Raimondi.',
'En las alturas andinas de Ayacucho crece el impresionante Bosque de Puyas de Raimondi, un paisaje natural donde se alzan miles de estas gigantescas plantas consideradas únicas 
en el mundo. Sus enormes tallos y espinas forman un escenario sorprendente que resiste las bajas temperaturas y el clima extremo de los Andes. La Puya de Raimondi puede 
alcanzar varios metros de altura y florecer solo una vez en toda su vida, convirtiéndose en uno de los mayores símbolos de la naturaleza altoandina peruana. Rodeado de montañas 
y extensas pampas, este lugar ofrece una experiencia diferente para quienes buscan aventura, fotografía y contacto con paisajes poco comunes. Visitar este bosque es descubrir 
uno de los tesoros naturales más extraordinarios de Ayacucho.',
'titankayocc-puyas.jpg',
'Vilcashuamán - Ayacucho',
-13.461765, 
-74.142971,
2
);

INSERT INTO lugar
(nombre, descripcion, historia, imagen, ubicacion, latitud, longitud, categoria_id)
VALUES
(
'Cataratas de Cangallo',
'Conjunto de caídas de agua rodeadas de paisaje natural.',
'Entre montañas, vegetación y caminos andinos se encuentran las Cataratas de Cangallo, un impresionante conjunto de caídas de agua que forman uno de los paisajes naturales más 
atractivos de Ayacucho. El sonido constante del agua y el aire fresco crean un ambiente perfecto para quienes buscan tranquilidad y contacto con la naturaleza. Rodeadas de 
enormes rocas y áreas verdes, estas cataratas se han convertido en un destino ideal para caminatas, fotografías y turismo de aventura. Durante la temporada de lluvias, la 
fuerza y el caudal del agua hacen que el espectáculo natural sea aún más impresionante. Llegar a Cangallo es descubrir un rincón escondido donde la naturaleza ayacuchana 
muestra toda su belleza y energía.',
'cataratas-cangallo.jpg',
'Cangallo - Ayacucho',
-13.451302, 
-74.211201,
2
);

INSERT INTO lugar
(nombre, descripcion, historia, imagen, ubicacion, latitud, longitud, categoria_id)
VALUES
(
'Nevado Razuhuillca',
'Paisaje natural de altura ubicado en la provincia de Huanta.',
'En las alturas de la provincia de Huanta se levanta el majestuoso Nevado Razuhuillca, uno de los paisajes naturales más impresionantes de Ayacucho. Sus cumbres cubiertas de 
nieve, lagunas cristalinas y extensos campos andinos crean un escenario perfecto para quienes buscan aventura y conexión con la naturaleza. Durante años, este nevado ha sido 
considerado una fuente importante de agua para las comunidades cercanas y un símbolo natural de la región huantina. Los caminos que conducen hacia sus alrededores permiten 
apreciar montañas, fauna andina y paisajes que cambian con la luz del amanecer y el atardecer. Visitar Razuhuillca es descubrir la grandeza y tranquilidad de los Andes 
ayacuchanos en su máxima expresión.',
'nevado-razuhuillca.jpg',
'Huanta - Ayacucho',
-12.869559, 
-74.156281,
2
);

INSERT INTO lugar
(nombre, descripcion, historia, imagen, ubicacion, latitud, longitud, categoria_id)
VALUES
(
'Cañón de Qorihuillca',
'Formación rocosa natural ideal para caminatas y aventura.',
'A pocos kilómetros de la ciudad de Ayacucho se encuentra el impresionante Cañón de Qorihuillca, un paisaje natural formado por enormes paredes de roca que crean estrechos 
caminos y pasadizos llenos de misterio. Con el paso del tiempo, el viento y el agua moldearon estas formaciones hasta convertirlas en uno de los destinos de aventura más 
sorprendentes de la región. Caminar entre sus gigantescas grietas y corredores de piedra permite vivir una experiencia diferente rodeada de silencio, naturaleza y escenarios 
únicos para la fotografía. Durante el recorrido, la luz que ingresa entre las rocas crea sombras y colores que transforman el paisaje a cada momento. Visitar Qorihuillca es 
adentrarse en uno de los rincones más fascinantes y enigmáticos de Ayacucho.',
'canon-qorihuillca.jpg',
'Huamanga - Ayacucho',
-13.140862, 
-74.248229,
2
);

INSERT INTO lugar
(nombre, descripcion, historia, imagen, ubicacion, latitud, longitud, categoria_id)
VALUES
(
'Laguna Parinacochas',
'Laguna altoandina ubicada al sur de Ayacucho.',
'En el sur de Ayacucho, rodeada de extensas pampas y montañas andinas, se encuentra la majestuosa Laguna Parinacochas, uno de los paisajes naturales más importantes de la 
región. Sus tranquilas aguas reflejan el cielo y crean un escenario perfecto para apreciar la belleza y serenidad de los Andes peruanos. El nombre de la laguna proviene del 
quechua y significa “laguna de flamencos”, debido a las aves que antiguamente habitaban esta zona altoandina. A lo largo del año, viajeros y pobladores disfrutan de sus 
impresionantes vistas, del aire puro y de la riqueza natural que rodea este ecosistema. Visitar Parinacochas es descubrir un rincón lleno de calma, naturaleza y tradición en el 
corazón del sur ayacuchano.',
'laguna-parinacochas.jpg',
'Parinacochas - Ayacucho',
-15.290029, 
-73.706028,
2
);

INSERT INTO lugar
(nombre, descripcion, historia, imagen, ubicacion, latitud, longitud, categoria_id)
VALUES
(
'Pachapupum',
'Atractivo natural conocido por sus formaciones y aguas termales.',
'En las zonas altoandinas de Ayacucho se encuentra Pachapupum, un sorprendente atractivo natural conocido por sus formaciones volcánicas y sus aguas termales que emergen desde 
el interior de la tierra. Sus curiosas estructuras minerales, moldeadas por el paso del tiempo y la actividad geotérmica, crean un paisaje diferente a cualquier otro de la 
región. El vapor que brota entre las rocas y el agua caliente que fluye por pequeñas terrazas naturales convierten este lugar en un escenario lleno de misterio y belleza 
natural. Rodeado por montañas y extensos paisajes andinos, Pachapupum también es valorado por quienes buscan descanso y conexión con la naturaleza. Visitar este rincón de 
Ayacucho es descubrir uno de los fenómenos naturales más singulares y sorprendentes de los Andes peruanos.',
'pachapupum.jpg',
'Ayacucho',
-14.137695, 
-74.293325,
2
);

INSERT INTO lugar
(nombre, descripcion, historia, imagen, ubicacion, latitud, longitud, categoria_id)
VALUES
(
'Bosque de Piedras de Ayacucho',
'Paisaje natural con formaciones rocosas singulares.',
'Entre las montañas y pampas altoandinas de Ayacucho se extiende el impresionante Bosque de Piedras, un paisaje natural formado por enormes rocas esculpidas por el viento y el 
paso del tiempo. Sus curiosas formaciones crean figuras que parecen torres, animales y gigantes de piedra que sobresalen entre el silencio de los Andes. Caminar por este lugar 
transmite la sensación de recorrer un escenario antiguo y misterioso donde la naturaleza moldeó cada rincón de manera única. Durante el amanecer y el atardecer, la luz 
transforma las piedras y crea vistas espectaculares ideales para la fotografía y la aventura. Visitar el Bosque de Piedras de Ayacucho es descubrir uno de los paisajes más 
sorprendentes y poco explorados de la región.',
'bosque-piedras-ayacucho.jpg',
'Ayacucho',
-13.316308, 
-74.448690,
2
);


-- =========================================
-- RESTAURANTES
-- =========================================

INSERT INTO lugar
(nombre, descripcion, historia, imagen, ubicacion, latitud, longitud, categoria_id)
VALUES
(
'ViaVia Café Ayacucho',
'Café turístico reconocido por viajeros nacionales y extranjeros.',
'ViaVia es uno de los espacios gastronómicos y turísticos más conocidos del centro histórico de Ayacucho.',
'viavia-cafe-ayacucho.jpg',
'Centro Histórico - Huamanga',
-13.166317, 
-74.227752,
3
);

INSERT INTO lugar
(nombre, descripcion, historia, imagen, ubicacion, latitud, longitud, categoria_id)
VALUES
(
'Restaurante Tejuelos',
'Restaurante tradicional especializado en comida ayacuchana.',
'Tejuelos es reconocido por mantener sabores típicos regionales y atención turística.',
'restaurante-tejuelos.jpg',
'Huamanga - Ayacucho',
-13.160703, 
-74.226889,
3
);

INSERT INTO lugar
(nombre, descripcion, historia, imagen, ubicacion, latitud, longitud, categoria_id)
VALUES
(
'Restaurante Sukre',
'Restaurante moderno con propuesta gastronómica regional.',
'Sukre combina cocina ayacuchana y experiencia turística contemporánea.',
'restaurante-sukre.jpg',
'Huamanga - Ayacucho',
-13.160511, 
-74.226388,
3
);

INSERT INTO lugar
(nombre, descripcion, historia, imagen, ubicacion, latitud, longitud, categoria_id)
VALUES
(
'Antaqa Café',
'Café de especialidad y espacio turístico moderno.',
'Antaqa destaca por su ambiente acogedor y experiencia gastronómica urbana.',
'antaqa-cafe.jpg',
'Huamanga - Ayacucho',
-13.158885,
-74.223569,
3
);

INSERT INTO lugar
(nombre, descripcion, historia, imagen, ubicacion, latitud, longitud, categoria_id)
VALUES
(
'La Miel Ayacucho',
'Café y restaurante turístico en el centro histórico.',
'La Miel es frecuentado por turistas y visitantes nacionales.',
'la-miel-ayacucho.jpg',
'Centro Histórico - Huamanga',
-13.160367, 
-74.226351,
3
);

INSERT INTO lugar
(nombre, descripcion, historia, imagen, ubicacion, latitud, longitud, categoria_id)
VALUES
(
'Restaurante QuinuaQ',
'Restaurante de cocina regional ayacuchana.',
'QuinuaQ ofrece platos típicos y experiencias gastronómicas locales.',
'restaurante-quinuaq.jpg',
'Huamanga - Ayacucho',
-13.043912, 
-74.144709,
3
);

INSERT INTO lugar
(nombre, descripcion, historia, imagen, ubicacion, latitud, longitud, categoria_id)
VALUES
(
'Restaurante Las Flores',
'Restaurante turístico tradicional.',
'Las Flores es conocido por su ambiente familiar y gastronomía regional.',
'restaurante-las-flores.jpg',
'Huamanga - Ayacucho',
-13.162933, 
-74.217875,
3
);

INSERT INTO lugar
(nombre, descripcion, historia, imagen, ubicacion, latitud, longitud, categoria_id)
VALUES
(
'Restaurante La Plaza Casa Andina',
'Restaurante premium cercano a la Plaza Mayor.',
'Forma parte de la experiencia turística de Casa Andina Ayacucho.',
'restaurante-la-plaza-casa-andina.jpg',
'Centro Histórico - Huamanga',
-13.160608, 
-74.226410,
3
);

INSERT INTO lugar
(nombre, descripcion, historia, imagen, ubicacion, latitud, longitud, categoria_id)
VALUES
(
'Restaurante Sabor Andino',
'Restaurante especializado en cocina tradicional ayacuchana.',
'Destaca por platos regionales y atención turística.',
'restaurante-sabor-andino.jpg',
'Huamanga - Ayacucho',
-13.160690, 
-74.228898,
3
);

INSERT INTO lugar
(nombre, descripcion, historia, imagen, ubicacion, latitud, longitud, categoria_id)
VALUES
(
'Miroshnik Cacao Coffee',
'Cafetería moderna especializada en cacao y café artesanal.',
'Lugar turístico reconocido por productos artesanales ayacuchanos.',
'miroshnik-cacao-coffee.jpg',
'Huamanga - Ayacucho',
-13.160611, 
-74.227420,
3
);

INSERT INTO lugar
(nombre, descripcion, historia, imagen, ubicacion, latitud, longitud, categoria_id)
VALUES
(
'Restaurante El Niño',
'Restaurante tradicional ayacuchano.',
'Conocido por platos típicos y atención a visitantes.',
'restaurante-el-nino.jpg',
'Huamanga - Ayacucho',
-13.158329, 
-74.226205,
3
);

INSERT INTO lugar
(nombre, descripcion, historia, imagen, ubicacion, latitud, longitud, categoria_id)
VALUES
(
'ViaVia Café Hotel',
'Espacio gastronómico integrado con hospedaje turístico.',
'Popular entre turistas extranjeros y mochileros.',
'viavia-cafe-hotel.jpg',
'Centro Histórico - Huamanga',
-13.166317, 
-74.227752,
3
);

-- =========================================
-- HOTELES
-- =========================================

INSERT INTO lugar
(nombre, descripcion, historia, imagen, ubicacion, latitud, longitud, categoria_id)
VALUES
(
'DM Hoteles Ayacucho',
'Hotel turístico ubicado cerca de la Plaza Mayor.',
'Uno de los hospedajes más reconocidos de Ayacucho.',
'dm-hoteles-ayacucho.jpg',
'Centro Histórico - Huamanga',
-13.158817, 
-74.226029,
4
);

INSERT INTO lugar
(nombre, descripcion, historia, imagen, ubicacion, latitud, longitud, categoria_id)
VALUES
(
'Altipacha Ayacucho Hotel',
'Hotel moderno con diseño cultural andino.',
'Altipacha destaca por su experiencia premium y estilo turístico.',
'altipacha-hotel.jpg',
'Huamanga - Ayacucho',
-13.16140,
-74.22370,
4
);

INSERT INTO lugar
(nombre, descripcion, historia, imagen, ubicacion, latitud, longitud, categoria_id)
VALUES
(
'Casa Andina Ayacucho',
'Hotel turístico reconocido a nivel nacional.',
'Forma parte de una de las cadenas hoteleras más conocidas del Perú.',
'casa-andina-ayacucho.jpg',
'Centro Histórico - Huamanga',
-13.160614, 
-74.226419,
4
);

INSERT INTO lugar
(nombre, descripcion, historia, imagen, ubicacion, latitud, longitud, categoria_id)
VALUES
(
'Hotel Santa Rosa',
'Hotel tradicional ubicado en el centro de Ayacucho.',
'Frecuentado por turistas nacionales y visitantes regionales.',
'hotel-santa-rosa.jpg',
'Huamanga - Ayacucho',
-13.160644, 
-74.227203,
4
);

INSERT INTO lugar
(nombre, descripcion, historia, imagen, ubicacion, latitud, longitud, categoria_id)
VALUES
(
'Hotel Universo',
'Hotel moderno y accesible para turistas.',
'Ofrece hospedaje turístico cerca del centro histórico.',
'hotel-universo.jpg',
'Huamanga - Ayacucho',
-13.160622, 
-74.227669,
4
);

INSERT INTO lugar
(nombre, descripcion, historia, imagen, ubicacion, latitud, longitud, categoria_id)
VALUES
(
'ViaVia Hotel Ayacucho',
'Hotel turístico frecuentado por viajeros internacionales.',
'Combina hospedaje, cultura y experiencia gastronómica.',
'viavia-hotel-ayacucho.jpg',
'Centro Histórico - Huamanga',
-13.166317, 
-74.227752,
4
);


-- =========================================
-- MOVILIDADES
-- =========================================

INSERT INTO lugar
(nombre, descripcion, historia, imagen, ubicacion, latitud, longitud, categoria_id)
VALUES
(
'Traslado Aeropuerto - Centro Histórico',
'Servicio turístico de traslado desde el aeropuerto.',
'Movilidad diseñada para facilitar la llegada de turistas a la ciudad.',
'movilidad-aeropuerto-centro.jpg',
'Aeropuerto Coronel FAP Alfredo Mendívil Duarte',
-13.15480,
-74.20440,
5
);

INSERT INTO lugar
(nombre, descripcion, historia, imagen, ubicacion, latitud, longitud, categoria_id)
VALUES
(
'Taxi Turístico Ayacucho',
'Servicio privado de transporte turístico.',
'Ideal para recorridos personalizados dentro y fuera de la ciudad.',
'taxi-turistico-ayacucho.jpg',
'Huamanga - Ayacucho',
-13.16150,
-74.22380,
5
);

INSERT INTO lugar
(nombre, descripcion, historia, imagen, ubicacion, latitud, longitud, categoria_id)
VALUES
(
'Movilidad Full Day Tours',
'Servicio de transporte para tours y rutas turísticas.',
'Especializado en recorridos de día completo y turismo regional.',
'movilidad-full-day-tours.jpg',
'Huamanga - Ayacucho',
-13.16210,
-74.22310,
5
);

-- =========================================
-- RUTAS INTELIGENTES
-- =========================================

INSERT INTO ruta
(nombre, descripcion, duracion_horas, distancia_km, dificultad, imagen)
VALUES
(
'Ruta Completa Ayacucho',
'Experiencia integral cultural, gastronómica y natural.',
12,
120,
'Moderada',
'ruta-ayacucho-completa.jpg'
);

INSERT INTO ruta
(nombre, descripcion, duracion_horas, distancia_km, dificultad, imagen)
VALUES
(
'City Tour Ayacucho',
'Recorrido histórico por los principales atractivos culturales de Huamanga.',
4,
12,
'Fácil',
'ruta-city-tour.jpg'
);

INSERT INTO ruta
(nombre, descripcion, duracion_horas, distancia_km, dificultad, imagen)
VALUES
(
'Ruta Natural Millpu',
'Exploración de las famosas aguas turquesas de Millpu.',
8,
65,
'Moderada',
'ruta-millpu.jpg'
);

INSERT INTO ruta
(nombre, descripcion, duracion_horas, distancia_km, dificultad, imagen)
VALUES
(
'Ruta Gastronómica Ayacuchana',
'Experiencia culinaria con restaurantes emblemáticos.',
5,
10,
'Fácil',
'ruta-gastronomica.jpg'
);

INSERT INTO ruta
(nombre, descripcion, duracion_horas, distancia_km, dificultad, imagen)
VALUES
(
'Tour Huanta y Razuhuillca',
'Ruta turística entre Huanta y el nevado Razuhuillca.',
9,
90,
'Moderada',
'ruta-huanta-razuhuillca.jpg'
);

INSERT INTO ruta
(nombre, descripcion, duracion_horas, distancia_km, dificultad, imagen)
VALUES
(
'Ruta Religiosa Colonial',
'Recorrido por templos e iglesias tradicionales de Ayacucho.',
4,
8,
'Fácil',
'ruta-religiosa.jpg'
);

INSERT INTO ruta
(nombre, descripcion, duracion_horas, distancia_km, dificultad, imagen)
VALUES
(
'Tour Aventura Qorihuillca',
'Experiencia de trekking y aventura natural.',
7,
35,
'Difícil',
'ruta-qorihuillca.jpg'
);

INSERT INTO ruta
(nombre, descripcion, duracion_horas, distancia_km, dificultad, imagen)
VALUES
(
'Ruta Cultural Premium',
'Experiencia completa por sitios arqueológicos y espacios históricos.',
6,
24,
'Moderada',
'ruta-cultural-premium.jpg'
);



-- =========================================
-- RUTA DETALLE
-- =========================================


-- =========================================
-- 1. RUTA COMPLETA AYACUCHO
-- =========================================

INSERT INTO ruta_detalle
(lugar_id, ruta_id, orden, tiempo_estimado_minutos, observaciones)
VALUES
(1,1,1,40,'Inicio Plaza Mayor');

INSERT INTO ruta_detalle
(lugar_id, ruta_id, orden, tiempo_estimado_minutos, observaciones)
VALUES
(2,1,2,35,'Visita Catedral');

INSERT INTO ruta_detalle
(lugar_id, ruta_id, orden, tiempo_estimado_minutos, observaciones)
VALUES
(3,1,3,90,'Complejo Wari');

INSERT INTO ruta_detalle
(lugar_id, ruta_id, orden, tiempo_estimado_minutos, observaciones)
VALUES
(4,1,4,60,'Pampa de Ayacucho');

INSERT INTO ruta_detalle
(lugar_id, ruta_id, orden, tiempo_estimado_minutos, observaciones)
VALUES
(5,1,5,50,'Pueblo de Quinua');

INSERT INTO ruta_detalle
(lugar_id, ruta_id, orden, tiempo_estimado_minutos, observaciones)
VALUES
(14,1,6,120,'Aguas Turquesas');

INSERT INTO ruta_detalle
(lugar_id, ruta_id, orden, tiempo_estimado_minutos, observaciones)
VALUES
(23,1,7,60,'Experiencia gastronómica');


-- =========================================
-- 2. CITY TOUR AYACUCHO
-- =========================================

INSERT INTO ruta_detalle
(lugar_id, ruta_id, orden, tiempo_estimado_minutos, observaciones)
VALUES
(1,2,1,40,'Inicio del recorrido en Plaza Mayor');

INSERT INTO ruta_detalle
(lugar_id, ruta_id, orden, tiempo_estimado_minutos, observaciones)
VALUES
(2,2,2,35,'Visita guiada Catedral');

INSERT INTO ruta_detalle
(lugar_id, ruta_id, orden, tiempo_estimado_minutos, observaciones)
VALUES
(9,2,3,30,'Recorrido artesanal Santa Ana');


-- =========================================
-- 3. RUTA NATURAL MILLPU
-- =========================================

INSERT INTO ruta_detalle
(lugar_id, ruta_id, orden, tiempo_estimado_minutos, observaciones)
VALUES
(14,3,1,120,'Recorrido por aguas turquesas');

INSERT INTO ruta_detalle
(lugar_id, ruta_id, orden, tiempo_estimado_minutos, observaciones)
VALUES
(17,3,2,60,'Parada en cataratas');


-- =========================================
-- 4. RUTA GASTRONÓMICA
-- =========================================

INSERT INTO ruta_detalle
(lugar_id, ruta_id, orden, tiempo_estimado_minutos, observaciones)
VALUES
(23,4,1,45,'Experiencia gastronómica ViaVia');

INSERT INTO ruta_detalle
(lugar_id, ruta_id, orden, tiempo_estimado_minutos, observaciones)
VALUES
(24,4,2,60,'Degustación Tejuelos');

INSERT INTO ruta_detalle
(lugar_id, ruta_id, orden, tiempo_estimado_minutos, observaciones)
VALUES
(25,4,3,45,'Experiencia culinaria Sukre');


-- =========================================
-- 5. HUANTA Y RAZUHUILLCA
-- =========================================

INSERT INTO ruta_detalle
(lugar_id, ruta_id, orden, tiempo_estimado_minutos, observaciones)
VALUES
(11,5,1,60,'Recorrido por Huanta');

INSERT INTO ruta_detalle
(lugar_id, ruta_id, orden, tiempo_estimado_minutos, observaciones)
VALUES
(18,5,2,120,'Exploración del nevado');


-- =========================================
-- 6. RUTA RELIGIOSA
-- =========================================

INSERT INTO ruta_detalle
(lugar_id, ruta_id, orden, tiempo_estimado_minutos, observaciones)
VALUES
(2,6,1,45,'Visita Catedral');

INSERT INTO ruta_detalle
(lugar_id, ruta_id, orden, tiempo_estimado_minutos, observaciones)
VALUES
(7,6,2,35,'Templo Santo Domingo');

INSERT INTO ruta_detalle
(lugar_id, ruta_id, orden, tiempo_estimado_minutos, observaciones)
VALUES
(8,6,3,35,'Templo San Cristóbal');


-- =========================================
-- 7. AVENTURA QORIHUILLCA
-- =========================================

INSERT INTO ruta_detalle
(lugar_id, ruta_id, orden, tiempo_estimado_minutos, observaciones)
VALUES
(19,7,1,180,'Trekking y aventura natural');


-- =========================================
-- 8. RUTA CULTURAL PREMIUM
-- =========================================

INSERT INTO ruta_detalle
(lugar_id, ruta_id, orden, tiempo_estimado_minutos, observaciones)
VALUES
(3,8,1,90,'Exploración arqueológica Wari');

INSERT INTO ruta_detalle
(lugar_id, ruta_id, orden, tiempo_estimado_minutos, observaciones)
VALUES
(4,8,2,60,'Visita histórica Pampa de Ayacucho');

INSERT INTO ruta_detalle
(lugar_id, ruta_id, orden, tiempo_estimado_minutos, observaciones)
VALUES
(5,8,3,50,'Experiencia cultural Quinua');







