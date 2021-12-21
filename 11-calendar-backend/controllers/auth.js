const express = require("express");
const { validationResult } = require('express-validator');

const crearUsuario = (req, res = express.response) => {
    const {name, email, password} = req.body;

   
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
