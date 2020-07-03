const changeColor = (weather) => {

  const $cloudBase = document.querySelector("#cloud-base");
  const $cloudBack = document.querySelector("#cloud-back");
  const $cloudMid = document.querySelector("#cloud-mid");
  const $cloudFront = document.querySelector("#cloud-front");

  const $state = '';

  switch (weather) {
    case 'clear sky':
      //$state = 'soleado';

      $cloudBase.style.boxShadow = "200px 170px 19px 40px rgb(232, 236, 144) ";
      $cloudBack.style.boxShadow = "200px 200px 10px 40px rgba(249, 255, 158, 0.87)";
      $cloudMid.style.boxShadow = "210px 250px 28px 30px rgb(218, 222, 130) ";
      $cloudFront.style.boxShadow = "210px 272px 30px 0px rgb(250, 255, 158) ";
      break; 

    case 'few clouds' ||  'scattered clouds' || 'broken clouds':
      //$state = 'nublado';

      $cloudBase.style.boxShadow = "200px 170px 19px 40px rgba(210, 251, 255, 0.75)";
      $cloudBack.style.boxShadow = "200px 170px 19px 40px rgba(104, 152, 165, 0.46)";
      $cloudMid.style.boxShadow = "200px 170px 19px 40px rgba(170, 204, 204, 0.74)";
      $cloudFront.style.boxShadow = "200px 170px 19px 40px rgba(214, 227, 228, 0.62)";
      break;

    case 'shower rain' || 'rain':
      //$state = 'lluvioso';
      $cloudBase.style.boxShadow = "200px 170px 19px 40px rgb(193, 140, 193) ";
      $cloudBack.style.boxShadow = "200px 170px 19px 40px rgb(168, 126, 169) ";
      $cloudMid.style.boxShadow = "200px 170px 19px 40px rgb(207, 152, 208)";
      $cloudFront.style.boxShadow = "200px 170px 19px 40px rgb(221, 164, 222) ";
      break;

    case 'thunderstorm':
      //$state = 'tormenta';
      $cloudBase.style.boxShadow = "200px 170px 19px 40px rgb(79, 43, 128) ";
      $cloudBack.style.boxShadow = "200px 170px 19px 40px rgb(72, 37, 121)";
      $cloudMid.style.boxShadow = "200px 170px 19px 40px rgb(92, 53, 146)";
      $cloudFront.style.boxShadow = "200px 170px 19px 40px rgb(97, 57, 152) ";
      break;

    case 'snow':
      //$state = 'nieve';
      $cloudBase.style.boxShadow = "200px 170px 19px 40px rgba(47, 105, 152, 0.94) ";
      $cloudBack.style.boxShadow = "200px 170px 19px 40px rgb(45, 99, 143) ";
      $cloudMid.style.boxShadow = "200px 170px 19px 40px rgb(50, 116, 167) ";
      $cloudFront.style.boxShadow = "200px 170px 19px 40px rgba(51, 120, 173, 0.84) ";
      break;
    
    case 'mist':
      //$state = 'niebla';
      $cloudBase.style.boxShadow = "200px 170px 19px 40px rgb(92, 146, 87)";
      $cloudBack.style.boxShadow = "200px 170px 19px 40px rgba(136, 216, 130, 0.44)";
      $cloudMid.style.boxShadow = "200px 170px 19px 40px rgba(57, 88, 54, 0.44) ";
      $cloudFront.style.boxShadow = "200px 170px 19px 40px rgba(107, 179, 102, 0.44)";
      break;
  }
};

/*
Possible states:
clear sky;
few clouds ||  scattered clouds || broken clouds;
shower rain || rain;
thunderstorm;
snow;
mist

       200px 170px 19px 40px rgba(136, 216, 130, 0.44)

*/

const states =[
  {
    name: 'soleado',
    cloudBase: 'box-shadow: 200px 170px 19px 40px rgba(255, 255, 255, 0.9);',
    cloudBack: 'box-shadow: 200px 200px 10px 40px rgba(255, 255, 255, 0.3);',
    cloudMid: 'box-shadow: 210px 250px 28px 30px rgba(255, 255, 255, 0.2);',
    cloudFront: 'box-shadow: 210px 272px 30px 0px rgba(81, 81, 81, 0.4);'
  },
  {
    name: 'nublado',
    cloudBase: 'box-shadow: 200px 170px 19px 40px rgba(255, 255, 255, 0.9);',
    cloudBack: 'box-shadow: 200px 200px 10px 40px rgba(255, 255, 255, 0.3);',
    cloudMid: 'box-shadow: 210px 250px 28px 30px rgba(255, 255, 255, 0.2);',
    cloudFront: 'box-shadow: 210px 272px 30px 0px rgba(81, 81, 81, 0.4);'
  },
  {
    name: 'soleado',
    cloudBase: 'box-shadow: 200px 170px 19px 40px rgba(255, 255, 255, 0.9);',
    cloudBack: 'box-shadow: 200px 200px 10px 40px rgba(255, 255, 255, 0.3);',
    cloudMid: 'box-shadow: 210px 250px 28px 30px rgba(255, 255, 255, 0.2);',
    cloudFront: 'box-shadow: 210px 272px 30px 0px rgba(81, 81, 81, 0.4);'
  },
  {
    name: 'soleado',
    cloudBase: 'box-shadow: 200px 170px 19px 40px rgba(255, 255, 255, 0.9);',
    cloudBack: 'box-shadow: 200px 200px 10px 40px rgba(255, 255, 255, 0.3);',
    cloudMid: 'box-shadow: 210px 250px 28px 30px rgba(255, 255, 255, 0.2);',
    cloudFront: 'box-shadow: 210px 272px 30px 0px rgba(81, 81, 81, 0.4);'
  },
  {
    name: 'soleado',
    cloudBase: 'box-shadow: 200px 170px 19px 40px rgba(255, 255, 255, 0.9);',
    cloudBack: 'box-shadow: 200px 200px 10px 40px rgba(255, 255, 255, 0.3);',
    cloudMid: 'box-shadow: 210px 250px 28px 30px rgba(255, 255, 255, 0.2);',
    cloudFront: 'box-shadow: 210px 272px 30px 0px rgba(81, 81, 81, 0.4);'
  },
  {
    name: 'soleado',
    cloudBase: 'box-shadow: 200px 170px 19px 40px rgba(255, 255, 255, 0.9);',
    cloudBack: 'box-shadow: 200px 200px 10px 40px rgba(255, 255, 255, 0.3);',
    cloudMid: 'box-shadow: 210px 250px 28px 30px rgba(255, 255, 255, 0.2);',
    cloudFront: 'box-shadow: 210px 272px 30px 0px rgba(81, 81, 81, 0.4);'
  },

]

/*Conexión con la API*/

const fetchWeather = async () => { 

    const location = {
        lat: -34.6258356,
        lng: -58.4187918
    }

    const url = 'http://api.openweathermap.org/data/2.5/weather?lat='+location.lat+'&lon='+location.lng+'&appid=b9480115954fc6c8c76827570ecbb36c'; 

    const response = await fetch(url); 
    const json = await response.json(); 
    console.log("Response completo de la API:", json)

    const {weather} = json; 
    console.log("Objeto que tiene la propiedad que vamos a usar para la nube:", weather)

    const weatherData = weather.map( ({description}) => description);
    console.log("Dato necesario para setear el color:", weatherData);

    //changeColor(weatherData); Llamada a la función que asigna el color según el clima. 
}

fetchWeather();

/*

    case 'snow':
      //$state = 'nieve';
      $cloudBase.style.boxShadow = "200px 170px 19px 40px rgba(82, 98, 111, 0.94)";
      $cloudBack.style.boxShadow = "200px 170px 19px 40px rgba(48, 49, 49)";
      $cloudMid.style.boxShadow = "200px 170px 19px 40px rgba(119, 138, 148)";
      $cloudFront.style.boxShadow = "200px 170px 19px 40px rgba(181, 194, 204, 0.84)";
      break;

      case 'mist':
      //$state = 'niebla';
      $cloudBase.style.boxShadow = "200px 170px 19px 40px rgba(249, 251, 253, 0.44)";
      $cloudBack.style.boxShadow = "200px 170px 19px 40px rgba(73, 95, 95, 0.23)";
      $cloudMid.style.boxShadow = "200px 170px 19px 40px rgba(226, 226, 226, 0.16)";
      $cloudFront.style.boxShadow = "200px 170px 19px 40px rgba(95, 103, 109, 0.27)";
      break;

         case 'clear sky':
      //$state = 'soleado';

      $cloudBase.style.boxShadow = "200px 170px 19px 40px rgba(195, 241, 249, 0.88)";
      $cloudBack.style.boxShadow = "200px 200px 10px 40px rgba(190, 251, 251, 0.87)";
      $cloudMid.style.boxShadow = "210px 250px 28px 30px rgba(140, 217, 255, 0.77)";
      $cloudFront.style.boxShadow = "210px 272px 30px 0px rgba(50, 121, 142, 0.46)";
      break; 

          case 'shower rain' || 'rain':
      //$state = 'lluvioso';
      $cloudBase.style.boxShadow = "200px 170px 19px 40px rgba(116, 147, 150)";
      $cloudBack.style.boxShadow = "200px 170px 19px 40px rgba(11, 60, 74, 0.42)";
      $cloudMid.style.boxShadow = "200px 170px 19px 40px rgba(107, 142, 142, 0.87)";
      $cloudFront.style.boxShadow = "200px 170px 19px 40px rgba(172, 210, 212, 0.74)";
      break;

*/