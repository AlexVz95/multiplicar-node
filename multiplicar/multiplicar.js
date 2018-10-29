const colors = require('colors')
const fs = require('fs');

let crearArchivo = ( base, limite = 10 ) => {
    return new Promise ((resolve, reject) => {

        if(!Number(base)){
            reject(`El valor introducido de la base ${base} no es un numero`)
            return
        }

        if(!Number(limite)){
            reject(`El valor introducido de el limite ${base} no es un numero`)
            return
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i} \n`
        }
        
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            resolve(`tabla-${base}.txt`)
        });
    });
}

let listarTabla = (base, limite = 10) => {
    return new Promise ((resolve, reject) => {

        if(!Number(base)){
            reject(`El valor introducido de la base ${base} no es un numero`)
            return
        }

        if(!Number(limite)){
            reject(`El valor introducido de el limite ${base} no es un numero`)
            return
        }

        console.log('Tabla de multiplicar en base: ', base)
        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base*i}`.blue);
        }

        resolve('Tabla de multiplicar con exito')
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}
