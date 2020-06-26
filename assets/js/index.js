const changeColor = (weather) => {

  const $cloudBase = document.querySelector("#cloud-base");
  const $cloudBack = document.querySelector("#cloud-back");
  const $cloudMid = document.querySelector("#cloud-mid");
  const $cloudFront = document.querySelector("#cloud-front");

  switch (weather) {
    case "Clear Sky":
      $cloudBase.style.boxShadow = "200px 170px 19px 40px rgba(82, 121, 234, 0.9)";
      $cloudBack.style.boxShadow = "200px 170px 19px 40px rgba(82, 121, 234, 0.9)";
      $cloudMid.style.boxShadow = "200px 170px 19px 40px rgba(82, 121, 234, 0.9)";
      $cloudFront.style.boxShadow = "200px 170px 19px 40px rgba(82, 121, 234, 0.9)";
      break;

    case "Few Clouds":
      $cloudBase.style.boxShadow = "200px 170px 19px 40px rgba(143, 234, 127, 0.9)";
      $cloudBack.style.boxShadow = "200px 170px 19px 40px rgba(143, 234, 127, 0.9)";
      $cloudMid.style.boxShadow = "200px 170px 19px 40px rgba(143, 234, 127, 0.9)";
      $cloudFront.style.boxShadow = "200px 170px 19px 40px rgba(143, 234, 127, 0.9)";
      break;

    case "Scattered Clouds":
        break;

    case 'Broken Clouds':

  }
};
