const mysql = require('mysql');
const conexion = mysql.createConnection(
    {
        host:'mysql-tecwebs.alwaysdata.net',
        user:'tecwebs',
        password:'tecweb123.',
        database:'tecwebs_gestionorden'
    }

);
conexion.connect(
    err=>{
        if(err){
            console.log('Error al conectar a la BD: '+err)
        }
        else{
            console.log('Conectado correctamente a la BD')
        }

    }
);

module.exports=conexion;