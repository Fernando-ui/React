const express = require("express");

const crearUsuario = (req, res = express.response) => {
    const {name, email, password} = req.body;

    if(name.length < 5){
        return res.status(400).json({
            ok:false,
            msg:'El nombre debe de ser mayor a 5'
        });
    }

  res.json({
    ok: true,
    creando:'Usuario',
    name,
    email,
    contrasenia,
  });
};

const loginUsuario = (req, res = express.response) => {
    const { email, password } = req.body;
  res.json({
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
