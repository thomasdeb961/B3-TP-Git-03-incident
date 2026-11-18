const test = require("node:test");
const assert = require("node:assert/strict");
const { calculerCoutIntervention } = require("../src/calcul");
const { afficherCout } = require("../src/affichage");

test("2 h a 50 EUR/h avec 20 EUR de deplacement coutent 120 EUR (regle metier)", () => {
    assert.equal(calculerCoutIntervention(2, 50, 20), 120);
});

test("une intervention sans frais de deplacement", () => {
    assert.equal(calculerCoutIntervention(3, 40, 0), 120);
});

test("le cout est affiche avec deux decimales", () => {
    assert.equal(afficherCout(120), "120.00 euros");
});
