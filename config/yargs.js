const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 20
    }
}
const argv = require('yargs').
command('listar', 'Imprime en consola la tabla de multiplicar',opts)
.command('crear', 'Imprime en consola la tabla de multiplicar',opts)
.help()
.argv

module.exports = {
    argv
}