
require('dotenv').config();
const express = require('express');
const { dbConnection } = require('./database/config');


//* Crear servidor express
const app = express();

// * Base de Datos 
dbConnection();

// * Lectura y parseo del body
app.use(express.json());


// * Rutas generales
app.use('/api/auth',require('./routes/auth'));


// * Directorio Publico
app.use(express.static('public'))

// * Escuchr peticiones
app.listen(process.env.PORT, ()=>{
        console.log('Servidor arriba en puerto 4000');
    
})  
 