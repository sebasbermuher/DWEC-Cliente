let fecha = new Date();

let fechaFinCurso = new Date("Jun 24 2022");

let resta = fechaFinCurso - fecha;

let diasRestantes = Math.floor(resta / (1000 * 60 * 60 * 24)); // (resta/milisegundos de un dia)

alert("Quedan " + diasRestantes + " dias para terminar el curso");
