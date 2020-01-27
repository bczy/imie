import exportParDefaut from './monModuleDeMaths';
//affichera 2 puisque l'export par default
console.log(exportParDefaut(4.5, 2));

//il est possible d'importer tous les exports d'un fichier
import * as mesFonctionsDeMath from './monModuleDeMaths';
mesFonctionsDeMath.additionArrondie(1.2, 1);

//on peut importer un seul ou plusieurs export au choix
import { additionArrondie } from './monModuleDeMaths';
console.log(additionArrondie(2.1, 3.6));
import { additionArrondie, soustractionArrondie } from './monModuleDeMaths';
console.log(additionArrondie(2.1, 3.6) + soustractionArrondie(2.2, 0.1));

//il est aussi possible de donner un alias à ces exports
import { additionArrondie as plusArrondi } from './monModuleDeMaths';
console.log(plusArrondi(1.2, 6));
import { soustractionArrondie, additionArrondie as plusArrondi } from './monModuleDeMaths';
console.log(plusArrondi(2.1, 3.6) + soustractionArrondie(2.2, 0.1));

//on peut importer la fonction par defaut et d'autre au choix
import division, { additionArrondie, soustractionArrondie } from './monModuleDeMaths';
console.log(division(4, 2.3) + additionArrondie(1, 1.2) + soustractionArrondie(4.2, 4));

//on peut importer la fonction par defaut et toutes les autres
import division, * as autreOperations from './monModuleDeMaths';
console.log(division(45,6) + autreOperations.)
