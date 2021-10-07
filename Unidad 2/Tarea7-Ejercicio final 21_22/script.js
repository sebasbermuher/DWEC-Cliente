let num_min = "qwertyuiopasdfghjklñzxcvbnm123456789";
let mayus = "QWERTYUIOPASDFGHJKLÑZXCVBNM";
let caract = "!·$%&/()=!#~½¬{[]}?¿¡€+-/<>,._-ºª%";
let mayusculas = false;
let minusculas = false;
let caracteres = false;
let numeros = false;
let minus = "qwertyuiopasdfghjklñzxcvbnm";
let num = "1234567890";

let nombre = prompt(
  "Introduce un nombre que contenga letras minisculas y numero"
);

for (let i = 0; i < nombre.length; i++) {
  while (num_min.indexOf(nombre.charAt(i)) === -1) {
    //solo admite los caracteres de la cadena
    nombre = prompt(
      "Error, solo puede tener minuscula y numeros.Introduce otro nombre."
    );
  }
}

do {
  let password = prompt("Introduce una contraseña");
  if (password == null) {
    alert("Has cancelado la password");
    break;
  }
  for (let i = 0; i < password.length; i++) {
    let x = password.charAt(i);
    if (mayus.indexOf(x) !== -1) {
      mayusculas = true;
    } else if (minus.indexOf(x) !== -1) {
      minusculas = true;
    } else if (num.indexOf(x) !== -1) {
      numeros = true;
    } else if (caract.indexOf(x) !== -1) {
      caracteres = true;
    }
  }
} while (!mayusculas || !minusculas || !numeros || !caracteres);
