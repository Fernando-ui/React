const express = require("express");
const { validationResult } = require("express-validator");
const Usuario = require("../models/Usuario");
const bcryptjs = require('bcryptjs');

const crearUsuario = async (req, res = express.response) => {
  const { email, password } = req.body;

  try {
    let usuario = await Usuario.findOne({ email });
    if (usuario) {
      return res.status(400).json({
        ok: false,
        msg: "Un usuario existe con ese correo",
      });
    }
    usuario = new Usuario(req.body);

    // * Encriptar contraseña 
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync( password, salt);

    await usuario.save();

    res.status(201).json({
      ok: true,
      uid: usuario.id,
      name: usuario.name,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      creando: "Usuario",
      msg: "Por favor hable con el administrador",
    });
    console.log(error, "Tenemos un error");
    throw new Error("No se ha podido guardar en la base de datos");
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
