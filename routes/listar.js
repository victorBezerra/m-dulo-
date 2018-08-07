const express = require('express');
const router = express.Router();
const motorista = require('./../model/motorista.js');

router.get('/',(req,res)=>{
  res.render('listas');
});

router.get('/motoristas',(req,res)=>{
  motorista.findAll()
    .then((result)=>{
      var motoristas = result;
      res.render('listaMotorista',{
        message: 'Lista de motorista',
        motoristas
      })
    })
    .catch((err)=>{
      console.log("ERRO: ",err);
    });
});

module.exports = router;
