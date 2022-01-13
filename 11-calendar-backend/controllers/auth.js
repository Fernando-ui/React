const express = require("express");
const Usuario = require("../models/Usuario");
const { generarJWT } = require('../helpers/jwt');
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
    // * Generar JWT
    const token = await generarJWT( usuario.id, usuario.name);

    res.status(201).json({
      ok: true,
      uid: usuario.id,
      name: usuario.name,
      token
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

const loginUsuario = async (req, res = express.response) => {
  const { email, password } = req.body;
  try {
    const usuario = await Usuario.findOne({ email });
    if( !usuario ){
      return res.status(400).json({
        ok:false,
        msg:'El usuario no existe con ese email',
      })
    }
    // Confirmar los passwords
    const validPassword = bcryptjs.compareSync( password, usuario.password);
    
    if( !validPassword ){
      return res.status(400).json({
        ok:false,
        msg:'',
      });
    };

   // * Generar JWT
   const token = await generarJWT( usuario.id, usuario.name);
   res.json({
     ok:true,
     uid: usuario.id,
     name: usuario.name,
     token
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok:false,
      msg:'Por favor hable con el administrador'
    })
    
  }
  
};

const revalidarToken = async(req, res) => {
  const { uid, name} = req;
  const token = await generarJWT( uid, name);
  
  res.json({
    ok:true,
    token,

  });
};

module.exports = {
  crearUsuario,
  loginUsuario,
  revalidarToken,
};
