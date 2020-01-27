const a = [
  "We're up all night 'til the sun",
  "We're up all night to get some",
  "We're up all night for good fun",
  "We're up all night to get lucky"
];

// Sans la syntaxe des fonctions fléchées
const a2 = a.map(function(s) {
  return s.length;
});
// [31, 30, 31, 31]

// Avec, on a quelque chose de plus concis
const a3 = a.map(s => s.length);
// [31, 30, 31, 31]

const addditionerEtArrondir = (a, b) => {
  const addition = a + b;
  return Math.floor(addition);
};
//Affichera 42
console.log(additionerEtArrondir(1.2, 41));
