// Ce fichier de config sera lus pas par le client mais par webpack d'ou le exports doit etre suivie du module.
module.exports = {
    entry: {
        index: './index.ts'
    },
    output: {
        filename: '[name].bundle.js',
        path: './Dist/'
    },
    module: {
        rules: [{
            //Test
            // Diférent loader que l'on va appliquer.
            //Qu'est ce qu'il utilise comme loader.

            //Expréssion régulière : tout les fichiers qui termine par .ts
            test: /\.ts$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }],
    }
}