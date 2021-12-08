
require('dotenv').config();
const express = require('express');


//* Crear servidor express
const app = express();

// * Rutas 
// app.get('/',(req, resp)=>{

//     console.log('Se requiere /');
//     resp.json({
//         ok:true
//     })
// })

// * Directorio Publico
app.use(express.static('public'))

// * Escuchr peticiones
app.listen(process.env.PORT, ()=>{
        console.log('Servidor arriba en puerto 4000');
    
})  