// Ce fichier de config sera lus pas par le client mais par webpack d'ou le exports doit etre suivie du module.
module.exports = {
    entry: {
        index: './index.ts'
    },
    output: {
        filename: './Dist/[name].bundle.js', //chemin
    },
    module: {
        rules: [{
            //Expréssion régulière : tout les fichiers qui termine par .ts
            test: /\.ts$/, //Test
            use: 'ts-loader', // Diférent loader que l'on va appliquer.
            exclude: /node_modules/
        }],
    },
    resolve: {
        //Qu'est ce qu'il utilise comme loader.
        extensions: ['.ts', '.js']
    },
    devtool: 'inline-source-map'
}

// Voir le fichier package.json ligne 7.