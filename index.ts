import {Compteur} from './compteur';

const compteur = new Compteur();

compteur.increment();//INCREMENT DE 1
compteur.increment();//2
compteur.increment();//3

console.log(compteur.displayCount());
