# ☁ CLOUDio ☁

##Nube del clima

Rodrigo Andrade, Nayla Arroyo Lizzio, Martina Franco

##Análisis e Investigación


###1 - Información - 5pts 

API elegida: 
OpenWeather - www.openweathermap.org/

API Key: 
API Key: 'b9480115954fc6c8c76827570ecbb36c'

Fetch:  
const fetchForecast = async (lat, lng) => { 

const url = 'http://api.openweathermap.org/data/2.5/forecast?lat='+lat+'&lon='+lng+'&units=metric&appid=0e3498f3359f3fe49fd95d453c4c9a8c'; 
const response = await fetch(url); 
const json = await response.json(); 
const {list} = json; 
return list 
}


Tipos de devolución de datos

Current Weather Data 
Devuelve el pronóstico del clima actual para una ubicación específica. Se puede hacer el request de diferentes maneras: 

City Name:  se puede hacer la llamada con especificando el nombre de una ciudad, código de estado y código de país. Los parámetros a ingresar en la URL pueden ser uno de ellos o todos. La información en el objeto que devuelve la API va a estar en el idioma en el que se hayan escrito los parámetros. 

Ejemplo de URL. Los parámetros se ingresan después de la letra “q”. Se debe incluir la API Key luego de “appid”.
https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=439d4b804bc8187953eb36d2a8c26a02

City ID: lista de códigos asignados por la página.

Ejemplo de URL. 
https://samples.openweathermap.org/data/2.5/weather?id=2172797&appid=439d4b804bc8187953eb36d2a8c26a02

Coordinadas geográficas: lleva dos parámetros, lat y lng. 

Ejemplo de URL. 
https://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=439d4b804bc8187953eb36d2a8c26a02


5 day weather forecast 
Devuelve el pronóstico de los próximos 5 días cada 3 horas. Las formas de realizar el request son la misma que en Current Weather Data: city name, city ID, coordenadas geográficas y ZIP code. 
	

##2 - Diseño de App - 10pts

###Descripción
Visualización de pronóstico del clima a través de una interfaz física en forma de nube que cambia sus colores dependiendo la condición meteorológica. 

Target
¿A quién vamos a vender?
Usuarios:
Personas interesadas en la estética del hogar. 
Adolescentes, adultos y jóvenes adultos

Adolescentes
Edad: 			13 - 18 años
Ocupación: 		Estudiantes de escuelas secundarias
Ubicación:		CABA y GBA
Actividades:		Ir a la escuela, hacer deporte, tomar cursos, salir con
			amigos

Jóvenes adultos
Edad: 			19 - 32 años
Ocupación: 		Empleos varios. Trabajos relacionados a diseño,
			arquitectura, programación, electrónica, multimedia, 
Ubicación:		CABA y GBA
Actividades:		Ir al trabajo, hacer deporte, ir al gym, tomar cursos, salir
			con amigos, viajes, vacaciones.


Ventas:
‘Casas de ventas de objetos tentadores’, regalerías y bazares que venden productos importados y nacionales. Y por otro lado, tener la posibilidad de obtenerlo por MercadoLibre


Morph - https://www.morph.com.ar/
Gato - https://gatostore.com/es/
Reina Batata - https://www.reinabatata.com/
Mercado Libre - https://www.mercadolibre.com/


Benchmark 

Proyectos 
Temperatura a distancia con arduino

Productos
REGULADOR DE TEMPERATURA KNX
https://www.archiexpo.es/prod/elsner-elektronik-gmbh/product-101636-1875462.html

Sensor CO2 HVAC EE800
http://sensovant.com/productos/gases/medicion-de-gases-CO2-hvac/articulo/sensor-CO2-humedad-relativa-temperatura-punto-rocio-HVAC-interiores-ee800.html

KNX-RAUMTEMPERATURREGLER
https://www.archiexpo.de/prod/vivo/product-150647-1771018.html



Diseño Conceptual

Funcionamiento
1. Al adquirir el producto el usuario abre nuestra web/App y se crea una cuenta. 
2. Cuelga la nube desde su techo o lo coloca sobre la superficie que desee.
3. El Arduino se conecta al wifi y obtiene la info de la API.
4. 

Web Mobile vs App:

Web mobile


Inmediatez 
Son accesibles de inmediato mediante los navegadores de los distintos dispositivos móviles.
Compatibilidad 
Las webs mobile son compatibles con cualquier tipo de dispositivo ya que las ejecutamos a través del navegador.


Rápida actualización
Es mucho más flexible que una app en términos de actualización del contenido.


Se encuentran fácilmente
Los sitios web mobile son mucho más fáciles de encontrar para los usuarios porque sus páginas pueden mostrarse en los resultados de búsqueda y aparecer en directorios específicos, lo que facilita la búsqueda de usuarios cualificados.
Fácil de compartir


Una web mobile puede ser una APP
Los sitios web móviles pueden desarrollarse como aplicaciones web, que se parecen mucho a las aplicaciones nativas. Una aplicación web móvil puede ser una alternativa práctica al desarrollo de aplicaciones nativas.


Tiempo y coste
El desarrollo de sitios web para dispositivos móviles es considerablemente más económico y requiere menos tiempo de desarrollo que una aplicación nativa.


Soporte y mantenimiento
Las actualizaciones y mantenimiento que requiere una app es mucho más costoso y especializado que mantener una página web.

App
Interactividad
Para funcionalidades interactivas (mayoritariamente los juegos), una app casi siempre la mejor opción.


Uso regular 
Si nuestro target va a hacer un uso personalizado de la información es más cómodo el uso de una app.


Cálculos o informes complejos
Si lo que necesitamos es consultar datos y manipularlos con cálculos, cuadros o informes complejos, el manejo con una app será más efectiva. Ejemplo: aplicaciones de banca o inversión.


Funcionalidades nativas de los dispositivos
Si para el uso de la app es necesario acceder a alguna de las aplicaciones nativas del dispositivos (ejemplo: la cámara).


No siempre requiere conexión
Podemos acceder al contenido de una app sin necesidad de estar conectados a internet.
https://www.marketinet.com/blog/web-mobile-app#gref

Implementación
Elementos
1 Arduino UNO
1 placa wifi para arduino. (Wifi Esp8266),
1 contenedor de plástico, 
1 tira de LEDs RGB, 
1 parlante para arduino,
Fuente 12V,
Módulos transistores para controlar cada canal de la tira RGB,
4 extensiones relay para Arduino (?) :3
1 protoboard 

Lenguajes
Web: JavaScript, HTML/CSS
[Geolocalización: web mobile]
Dispositivo: Arduino UNO

Mejoras futuras 
Tener una opción en la que las luces vayan al ritmo de la música
Notificación al celular sobre el clima
Programar un horario desde una web mobile en el momento que tengas que salir.
CLOUDio podría tener una función de juegos utilizando funciones nativas de teléfonos celulares (por ejemplo: Frío-Calor usando la distancia)


3- Diseño de interfaz - 5pts
En base a la investigación sobre tecnologías y las necesidades de mi web las tecnologías más adecuadas me parecen: 


Benchmark 
¿Existe ya?
¿Cuál es la manera más simple de presentar esa información?
¿Es esa manera la más original? ¿Provoca un aporte al diseño de interfases?
¿Requiere algún tipo de interacción?
Puede ser cualquier tipo de dispositivo fundamentalmente físicos (smart, arduino, etc)

Código

// PINES
int bluePin = 3;
int redPin = 5;
int greenPin = 6;

// COLORES
int clearColor[3] = {255, 251, 128};
int cloudsColor[3] = {194, 194, 194};
int rainColor[3] = {255, 191, 238};
int thunderstormColor[3] = {174, 92, 196};
int snowColor[3] = {74, 151, 240};
int mistColor[3] = {112, 207, 134};

// DATA
String weatherData; // response de la API
int weather; // respuesta de la API igualada a un número para usar en el switch

void setup() {
  pinMode(blue, OUTPUT);
  pinMode(red, OUTPUT);
  pinMode(green, OUTPUT);
}

void setColor ( int RGBColors[] ){
  analogWrite(redPin, RGBColors[0])
  analogWrite(greenPin, RGBColors[1])
  analogWrite(bluePin, RGBColors[2])  
}
 
void loop()
{
  if(weatherData == "clear sky"){
    weather = 0;
  }
  else if(weatherData == "few clouds" || weatherData == "scattered clouds" || weatherData == "broken clouds"){
    weather = 1;
  }
  else if(weatherData == "shower rain" || weatherData == "rain"){
  	weather = 2;
  }
  else if(weatherData == "thunderstorm"){
  	weather = 3;
  }
  else if(weatherData == "snow"){
  	weather = 4;
  }
  else if(weatherData == "mist"){
    weather = 5;
  }
  
  switch(weather){
    
    case 0:
      setColor(clearColor);
      break;
    
    case 1:
      setColor(cloudsColor)
      break;
    
    case 2:
      setColor(rainColor)
      break;
    
    case 3:
      setColor(thunderstormColor)
      break;
    
    case 4: 
      setColor(snowColor)
      break;
    
    case 5:
      setColor(mistColor)
      break;
    
  }
  
}

  

