const { calculerCoutIntervention } = require("../src/calcul");

const resultat = calculerCoutIntervention(2, 50, 20);

console.log("Resultat attendu : 120");
console.log("Resultat obtenu : " + resultat);
