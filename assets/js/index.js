const changeColor = (weather) => {

  const $cloudBase = document.querySelector("#cloud-base");
  const $cloudBack = document.querySelector("#cloud-back");
  const $cloudMid = document.querySelector("#cloud-mid");
  const $cloudFront = document.querySelector("#cloud-front");

  const $state = '';

  switch (weather) {
    case 'clear sky':
      //$state = 'soleado';

      $cloudBase.style.boxShadow = "200px 170px 19px 40px rgba(255, 255, 255, 0.9)";
      $cloudBack.style.boxShadow = "200px 200px 10px 40px rgba(255, 255, 255, 0.3)";
      $cloudMid.style.boxShadow = "210px 250px 28px 30px rgba(255, 255, 255, 0.2)";
      $cloudFront.style.boxShadow = "210px 272px 30px 0px rgba(81, 81, 81, 0.4)";
      break; 

    case 'few clouds' ||  'scattered clouds' || 'broken clouds':
      //$state = 'nublado';

      $cloudBase.style.boxShadow = "200px 170px 19px 40px rgba(143, 234, 127, 0.9)";
      $cloudBack.style.boxShadow = "200px 170px 19px 40px rgba(143, 234, 127, 0.9)";
      $cloudMid.style.boxShadow = "200px 170px 19px 40px rgba(143, 234, 127, 0.9)";
      $cloudFront.style.boxShadow = "200px 170px 19px 40px rgba(143, 234, 127, 0.9)";
      break;

    case 'shower rain' || 'rain':
      //$state = 'lluvioso';
      $cloudBase.style.boxShadow = "200px 170px 19px 40px rgba(82, 121, 234, 0.9)";
      $cloudBack.style.boxShadow = "200px 170px 19px 40px rgba(82, 121, 234, 0.9)";
      $cloudMid.style.boxShadow = "200px 170px 19px 40px rgba(82, 121, 234, 0.9)";
      $cloudFront.style.boxShadow = "200px 170px 19px 40px rgba(82, 121, 234, 0.9)";
      break;

    case 'thunderstorm':
      //$state = 'tormenta';
      break;

    case 'snow':
      //$state = 'nieve';
      break;
    
    case 'mist':
      //$state = 'niebla';
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
