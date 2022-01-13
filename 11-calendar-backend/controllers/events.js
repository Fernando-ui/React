const { response, request} = require('express');
// *  Mandar mensaje diciendo true y msg el evento que se hizo, Hacer las del CRUD

const crearEvento = (req, res = response) => {

    console.log(req.body);
    


    
    res.json({
        ok:true,
        msg:'Llamada a crearEvento'
    })
}

const getEventos = (req, res = response) => {
    res.json({
        ok:true,
        msg:'Llamada a getEventos'
    })
}
const actualizarEvento = (req, res = response) => {
    res.json({
        ok:true,
        msg:'Llamada a actualizarEvento'
    })
}
const eliminarEvento = (req, res = response) => {
    res.json({
        ok:true,
        msg:'Llamada a eliminarEvento'
    })
}

module.exports = {
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento,
}