const express = require("express");
const { validationResult } = require('express-validator');

const crearUsuario = (req, res = express.response) => {
    const {name, email, password} = req.body;

    const errors = validationResult( req );
    if( !errors.isEmpty() ){
      return res.status(400).json({
        ok:false,
        errors:errors.mapped()
      })
    }

  res.status(201).json({
    ok: true,
    creando:'Usuario',
    name,
    email,
    password,
  });
};

const loginUsuario = (req, res = express.response) => {

    const { email, password } = req.body;
    const errors = validationResult( req );

    if(!errors.isEmpty()){
      return res.status(400).json({
        ok:false,
        errors:errors.mapped()
      })
    }

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
