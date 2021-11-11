let adn = prompt("Introduce un ADN");
let cad_separada = adn.split("-"); //Separo la cadena por guiones

//cada parte de la cadena
let primerGrupo = cad_separada[0];
let segundoGrupo = cad_separada[1];
let tercerGrupo = cad_separada[2];

let adnCorrecto = "Es correcto";
let noCorrecto = "No es correcto";

if (adnCorrecto) {
  for (let x = 0; x < primerGrupo.length; x++) {
    if (primerGrupo.charAt(x) === "C" || primerGrupo.charAt(x) === "c") {
      adnCorrecto = noCorrecto;
      break; // si contiene C dará incorrecto
    }
  }
  //del segundo grupo hay que divirlos en dos
  //para ello la primera parte pillo desde el principio de
  // y la segunda luego la relleno
  let primeraParte = segundoGrupo.charAt(0);
  let segundaParte = "";

  for (let x = 1; x < segundoGrupo.length; x++) {
    if (segundoGrupo.charAt(x) !== primeraParte && segundaParte === "") {
      segundaParte = segundoGrupo.charAt(x);
      //valida que la letra escogida, si es distinta de la primera parte debera ser de la segunda
    } else if (
      segundaParte != "" &&
      segundoGrupo.charAt(x) !== primeraParte &&
      segundoGrupo.charAt(x) !== segundaParte
      // en las dos partes no puede tener la misma letra
    ) {
      adnCorrecto = noCorrecto;
    }
  }

  if (tercerGrupo.charAt(0) !== "T") {
    adnCorrecto = noCorrecto; // si el valor 0 del grupo no es T no seria correcto
  }
}

document.getElementById("adn").innerHTML = adn;
document.getElementById("resultado").innerHTML = adnCorrecto;
