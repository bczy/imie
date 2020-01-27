function varScope(x) {
  if (x === true) {
    var toto = 'titi';
  }
  // affichera titi
  console.log(toto);
}

function constScope(x) {
  if (x === true) {
    const toto = 'titi';
  }
  // affichera ReferenceError...
  console.log(toto);
}

var toto = 'titi';
toto = 'tata';
//afichera tata
console.log(toto);

const toto = 'titi';
//affichera TypeError
toto = 'tata';
//ne sera pas exécuté à cause de l'erreur
console.log(toto);

function toto() {
  var toto = 'titi';
  var toto = 'tata';
  if (toto === 'tata') {
    var toto = 'toto';
    //affichera "toto"
    console.log(toto);
  }
}

function titi() {
  const titi = 'titi';
  //Affichera SyntaxError
  const titi = 'tata';
  if (titi === 'tata') {
    const titi = 'toto';
    console.log(titi);
  }
}

var toto = 'titi';
//affichera titi depuis n'importequel fichier js
//ou même depuis la console
console.log(toto);
