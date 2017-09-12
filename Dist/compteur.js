"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Compteur = /** @class */ (function () {
    function Compteur(compte) {
        if (compte === void 0) { compte = 0; }
        this.compte = compte;
    }
    Compteur.prototype.increment = function () {
        this.compte++;
    };
    Compteur.prototype.decrement = function () {
        this.compte--;
    };
    Compteur.prototype.displayCount = function () {
        return this.compte;
    };
    return Compteur;
}());
exports.Compteur = Compteur;
//# sourceMappingURL=compteur.js.map