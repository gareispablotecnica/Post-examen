const sqlite3=require('sqlite3').verbose();
const Module = require('module');
const path= require('path')

const ubicacion= path.resolve(__dirname,'./Gonzalo.db')

const db= new sqlite3.Database(ubicacion,(Error)=>{
    if(Error){
        console.error('❗ Error en la Creación de la Base de Datos')
    }
    else{
        console.log('✔ Base de Datos Creada Correctamente')
    }
})

db.run(
    `
    CREATE TABLE IF NOT EXISTS Datos(
        Dni INTEGER PRIMARY KEY,
        Apellido TEXT,
        Edad INTEGER
)`)

module.exports=db;