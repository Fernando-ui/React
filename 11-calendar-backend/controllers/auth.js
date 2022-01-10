const express = require("express");
const { validationResult } = require('express-validator');
const Usuario = require('../models/Usuario');

const crearUsuario = async(req, res = express.response) => {
    // const {name, email, password} = req.body;
    const usuario = new Usuario( req.body);
    try {
      await usuario.save();
      
      res.status(201).json({
        ok: true,
        creando:'Usuario',
        
      });
    } catch (error) {
      res.status(500).json({
        ok:false,
        creando:'Usuario',
        msg:'Por favor hable con el administrador'
      })
      console.log(error,'Tenemos un error');
      throw new Error('No se ha podido guardar en la base de datos')
    }

};

const loginUsuario = (req, res = express.response) => {

    const { email, password } = req.body;
    

  res.status(201).json({
    ok: true,
    msg: "Registro",
    email,
    password,
  });
};

const revalidarToken = (req, res) => {
  res.json({
    ok: true,
    msg: "Registro token",
  });
};

module.exports = { 
  crearUsuario,
  loginUsuario,
  revalidarToken,
};
