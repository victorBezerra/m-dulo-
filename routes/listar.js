const express = require('express');
const router = express.Router();
const motorista = require('./../model/motorista.js');
const veiculo = require('./../model/veiculo.js');

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

router.get('/veiculos',(req,res)=>{
  veiculo.findAll()
    .then((result)=>{
      var veiculos = result
      res.render('listaVeiculo',{
        message: 'Lista de veículos',
        veiculos
      });
    })
    .catch((err)=>{
      console.log("ERROR: ",err);
    });
});

module.exports = router;
