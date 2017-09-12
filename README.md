# Typescript-client (avec le module Webpack)
Préprocesseur (typescrypt) côté client

# INSTALATION
1. npm init && npm install --save webpack && npm install --save ts-loader && npm install typescript --save-dev
2. Crée le fichié suivant: index.html(script vers le fichier index.bundle.js).
3. Crée les fichiés de configuration (tsconfig.json && webpack.config.js)
4. Crée les fichier index.ts(import appel les fonctions du compteur et affiche le resultat) && compteur.ts(export les function que l'on crée)
5. Dans le fichier package.json, lancer webpack et surveiller pour recompiler voir ligner 7 au lieu de test, 'build': 'webpack --watch'