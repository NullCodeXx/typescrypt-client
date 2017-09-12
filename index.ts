import {Compteur} from './compteur';

const compteur = new Compteur();

compteur.increment();//INCREMENT DE 1
compteur.increment();//2
compteur.increment();//3

console.log(compteur.displayCount());

// Assigner la function increment au button

const para = document.querySelector('.para');
const btnIncrement = document.querySelector('.increment');
const btnDecrement = document.querySelector('.decrement');

btnIncrement.addEventListener('click', ()=>{
    compteur.increment();
    para.textContent = compteur.displayCount().toString();
})
btnDecrement.addEventListener('click', ()=>{
    compteur.decrement();
    para.textContent = compteur.displayCount().toString();
})