const { response, request} = require('express');
const Evento = require('../models/Evento');

// *  Mandar mensaje diciendo true y msg el evento que se hizo, Hacer las del CRUD

const crearEvento = async (req, res = response) => {

    const evento = new Evento( req.body);
    try {
        evento.user = req.uid;
        const eventoGuardado = await evento.save();
        res.json({
            ok:true,
            evento:eventoGuardado
        })
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'Hable con el administrador'
        })
        
    }
    res.json({
        ok:true,
        msg:'Llamada a crearEvento'
    })
}

const getEventos = async(req, res = response) => {
    const eventos = await Evento.find()
                    .populate('user','nameb');
    
    
    res.json({
        ok:true,
        eventos
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