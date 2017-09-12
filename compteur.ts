export class Compteur {
    constructor(private compte: number= 0){}

    increment() {
        this.compte ++;
    }

    decrement() {
        this.compte --;
    }

    displayCount() {
        return this.compte;
    }
}