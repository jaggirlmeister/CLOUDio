# ☁ CLAU ☁

## Nube del clima

Rodrigo Andrade, Nayla Arroyo Lizzio, Martina Franco

## Análisis e Investigación


## 1 - Información - 5pts 

API elegida: 
**OpenWeather** - www.openweathermap.org/

API Key: 'b9480115954fc6c8c76827570ecbb36c'

Fetch:  
`const fetchForecast = async (lat, lng) => { `

`const url = 'http://api.openweathermap.org/data/2.5/forecast?lat='+lat+'&lon='+lng+'&units=metric&appid=0e3498f3359f3fe49fd95d453c4c9a8c'; `
`const response = await fetch(url); `
`const json = await response.json(); `
`const {list} = json; `
`return list `
`}`


### Tipos de devolución de datos

**Current Weather Data**
Devuelve el pronóstico del clima actual para una ubicación específica. Se puede hacer el request de diferentes maneras: 

* City Name:  se puede hacer la llamada con especificando el nombre de una ciudad, código de estado y código de país. Los parámetros a ingresar en la URL pueden ser uno de ellos o todos. La información en el objeto que devuelve la API va a estar en el idioma en el que se hayan escrito los parámetros. 

> Ejemplo de URL. Los parámetros se ingresan después de la letra “q”. Se debe incluir la API Key luego de “appid”.
> https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=439d4b804bc8187953eb36d2a8c26a02

* City ID: lista de códigos asignados por la página.

> Ejemplo de URL. 
> https://samples.openweathermap.org/data/2.5/weather?id=2172797&appid=439d4b804bc8187953eb36d2a8c26a02

* Coordenadas geográficas: lleva dos parámetros, lat y lng. 

> Ejemplo de URL. 
> https://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=439d4b804bc8187953eb36d2a8c26a02


**5 day weather forecast**
Devuelve el pronóstico de los próximos 5 días cada 3 horas. Las formas de realizar el request son la misma que en Current Weather Data: city name, city ID, coordenadas geográficas y ZIP code. 
	
## 2 - Diseño de App - 10pts

### Descripción
_Visualización de pronóstico del clima a través de una interfaz física en forma de nube que cambia sus colores dependiendo la condición meteorológica._ 

### Target
_¿A quién vamos a vender?_

**Usuarios:**
1. Personas interesadas en la estética del hogar. 
1. Adolescentes, adultos y jóvenes adultos

**Adolescentes**
Edad: 			13 - 18 años
Ocupación: 		Estudiantes de escuelas secundarias
Ubicación:		CABA y GBA
Actividades:		Ir a la escuela, hacer deporte, tomar cursos, salir con
			amigos

**Jóvenes adultos**
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


### Benchmark 

**Proyectos**
* Temperatura a distancia con arduino

**Productos**
> REGULADOR DE TEMPERATURA KNX
> https://www.archiexpo.es/prod/elsner-elektronik-gmbh/product-101636-1875462.html

> Sensor CO2 HVAC EE800`
> http://sensovant.com/productos/gases/medicion-de-gases-CO2-hvac/articulo/sensor-CO2-humedad-relativa-temperatura-punto-rocio-HVAC-interiores-ee800.html

> KNX-RAUMTEMPERATURREGLER
> https://www.archiexpo.de/prod/vivo/product-150647-1771018.html

### Diseño Conceptual

**Funcionamiento**
1. Al adquirir el producto el usuario abre nuestra web/App y se crea una cuenta. 
1. Cuelga la nube desde su techo o lo coloca sobre la superficie que desee.
1. El Arduino se conecta al wifi y obtiene la info de la API.

***

### Web Mobile vs App:

Una de las opciones que consideramos fue la de tener una App o una web mobile para que el usuario se cree una cuenta y personalice su nube desde su dispositivo móvil o su PC. **Si bien descartamos esta idea**, habíamos hecho la siguiente investigación:

**Web mobile**

1. Inmediatez: Son accesibles de inmediato mediante los navegadores de los distintos dispositivos móviles.
1. Compatibilidad: Las webs mobile son compatibles con cualquier tipo de dispositivo ya que las ejecutamos a través del navegador.
1. Rápida actualización: Es mucho más flexible que una app en términos de actualización del contenido.
1. Se encuentran fácilmente: Los sitios web mobile son mucho más fáciles de encontrar para los usuarios porque sus páginas pueden mostrarse en los resultados de búsqueda y aparecer en directorios específicos, lo que facilita la búsqueda de usuarios cualificados.
1. Fácil de compartir
1. Una web mobile puede ser una APP: Los sitios web móviles pueden desarrollarse como aplicaciones web, que se parecen mucho a las aplicaciones nativas. Una aplicación web móvil puede ser una alternativa práctica al desarrollo de aplicaciones nativas.
1. Tiempo y coste: El desarrollo de sitios web para dispositivos móviles es considerablemente más económico y requiere menos tiempo de desarrollo que una aplicación nativa.
1. Soporte y mantenimiento: Las actualizaciones y mantenimiento que requiere una app es mucho más costoso y especializado que mantener una página web.

**App**

1. Interactividad: Para funcionalidades interactivas (mayoritariamente los juegos), una app casi siempre la mejor opción.
1. Uso regular: Si nuestro target va a hacer un uso personalizado de la información es más cómodo el uso de una app.
1. Cálculos o informes complejos: Si lo que necesitamos es consultar datos y manipularlos con cálculos, cuadros o informes complejos, el manejo con una app será más efectiva. Ejemplo: aplicaciones de banca o inversión.
1. Funcionalidades nativas de los dispositivos: Si para el uso de la app es necesario acceder a alguna de las aplicaciones nativas del dispositivos (ejemplo: la cámara).
1. No siempre requiere conexión: Podemos acceder al contenido de una app sin necesidad de estar conectados a internet.

https://www.marketinet.com/blog/web-mobile-app#gref

### Implementación
**Elementos**
* 1 Arduino UNO
* 1 placa wifi para arduino. (Wifi Esp8266),
* 1 contenedor de plástico, 
* 1 tira de LEDs RGB, 
* 1 parlante para arduino,
* Fuente 12V,
* Módulos transistores para controlar cada canal de la tira RGB,
* 4 extensiones relay para Arduino 
* 1 protoboard 

**Lenguajes**
* Web: JavaScript, HTML/CSS
* Dispositivo: Arduino UNO (Lenguaje C)

**Implementación en Arduino (Minuto 31 al 38)**
https://www.youtube.com/watch?v=IG5vw6P9iY4



**Mejoras futuras**
* Nos gustaría para una implementación muy a futuro que sea un sistema de IA como Alexa.
* Vender accesorios por separado que complementen el proyecto (por ejemplo, parlantes)
* Tener una opción en la que las luces vayan al ritmo de la música
* Versión para niños que tenga un despertador integrado
* Notificación al celular sobre el clima
* CLAU podría tener una función de juegos utilizando funciones nativas de teléfonos celulares (por ejemplo: Frío-Calor usando la distancia)



## 3- Diseño de interfaz - 5pts
En base a la investigación sobre tecnologías y las necesidades de mi web las tecnologías más adecuadas me parecen: 

**¿Cuál es la manera más simple de presentar esa información?**
* La información que llegue desde la API se va a representar en los LED con distintos colores. 
* La interfaz va a ser física, no gráfica. 
* El color de la nube se va a poder cambiar con un control remoto. 

**¿Es esa manera la más original? ¿Provoca un aporte al diseño de interfases?**
* Consideramos que es una forma original de mostrar la información ya que, en general, el estado del clima suele mostrarse en aplicaciones para celulares o en sitios web. 
* Además la representación suele ser numérica o con símbolos/íconos/imágenes
* Nuestro enfoque difiere de lo común, ya que uno no esperaría encontrarse con un elemento físico como una nube para el pronóstico del clima. 

**¿Requiere algún tipo de interacción?**
* Requiere de un control remoto para cambiar sus luces por las que el usuario decida.
* Nos gustaría que con el control se pueda cambiar de modo ‘predicción del clima’ a ‘customizado’. Preguntar si se puede elegir una opción para un botón. 

***

## Sitio web

Desarrollamos un sitio web en dónde simulamos la página de producto de CLAU. Su finalidad es mostrar el funcionamiento de la nube así como también los colores disponibles según el estado del clima. 

https://cloud-io.vercel.app/

## Código

Terminada la investigación, empezamos a desarrollar el código que se ejecutaría en el Arduino. Hicimos dos versiones. La segunda usa la librería FastLED, la cual permite un mayor control sobre la tira que LED haciendo más fácil su uso. Investigando las variantes que podiamos usar para generar la conexión del Arduino con la tira de LED encontramos la librería (https://howtomechatronics.com/tutorials/arduino/how-to-control-ws2812b-individually-addressable-leds-using-arduino/).

### Primera versión

![](https://i.ibb.co/Z8tn9VW/Codigo1.png)
![](https://i.ibb.co/G5wRkN1/Codigo2.png)
![](https://i.ibb.co/mBtHb0h/Codigo33.png)

### Segunda versión usando la librería FastLED --> https://github.com/FastLED/FastLED

![](https://i.ibb.co/ftWZBmh/Codigo4.png)
![](https://i.ibb.co/G5wRkN1/Codigo2.png)
![](https://i.ibb.co/mBtHb0h/Codigo33.png)
  

