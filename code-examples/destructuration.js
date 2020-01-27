const monTableau = [1, 2, 3, 4, 5];
//affichera "Array [1, 2, 3, 4, 5]"
console.log(monTableau);
//affichera "1 2 3 4 5"
console.log(...monTableau);

const monSecondTableau = [...monTableau, 6, 7, 8, 9, 10];
//affichera "Array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
console.log(monSecondTableau);
//affichera "1 2 3 4 5 6 7 8 9 10"
console.log(...monSecondTableau);

const monObjet = { couleur: 'vert', poids: 10, valeur: 15 };
//affichera "Object { couleur: 'vert', poids: 10, valeur: 15 }"
console.log(monObjet);
const { couleur, valeur } = monObjet;
//affichera "Mon objet est vert et vaut 15 euros"
console.log(`Mon objet est ${couleur} et vaut ${valeur} euros`);

const monSuperObjet = { ...monObjet, origine: 'France', type: 'aliment' };
//affichera "Object { couleur: 'vert', poids: 10, valeur: 15, origine: 'France', type: 'aliment' }"
console.log(monSuperObjet);

const monSecondObjet = { ...monObjet };
const monTroisiemeObjet = monObjet;
monObjet.couleur = rouge;
//affichera rouge, vert, rouge
console.log(monObjet.couleur, monSecondObjet.couleur, monTroisiemeObjet.couleur);
