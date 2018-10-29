const argv = require('./config/yargs').argv
const colors = require('colors')
const { crearArchivo } = require('./multiplicar/multiplicar')
const { listarTabla } = require('./multiplicar/multiplicar')

let comando = argv._[0];

switch(comando){
    case 'listar': {
        listarTabla(argv.base, argv.limite)
        .then( result => {
            console.log(result)
        })
        .catch( err => {
            console.log(err)
        })
    };break;
    case 'crear': {
        crearArchivo(argv.base, argv.limite).then(
            archivo => console.log(colors.green('Archivo creado:'), archivo.red)
        ).catch((err) => {
            console.log(err)
        });
    };break;
    default: console.log('Comando no renocido.');
}


// console.log(argv2)

