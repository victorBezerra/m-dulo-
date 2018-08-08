const express = require('express');
const router = express.Router();
const motorista = require('./../model/motorista');
const veiculo = require('./../model/veiculo.js');
const cor = require('./../model/cor.js');
const modelo = require('./../model/modelo.js');
const combustivel = require('./../model/combustivel.js');
const propriedade = require('./../model/propriedade.js');
const status = require('./../model/status.js');

router.get('/motorista/:cpf', (req,res)=>{
  console.log("CPF: ",req.params.cpf);
  motorista.findOne({
    where:{
      cpf:req.params.cpf
    }
  })
    .then((result)=>{
    var motorista = result;
    res.render('editarMotorista',{
      message: 'Editar motorista',
      motorista
      })
    })
    .catch((err)=>{
    console.log("ERRO: ", err);
    });
});

router.post('/motorista/:cpf',(req,res)=>{
  motorista.update(req.body,{
    where:{
      cpf: req.params.cpf
    }
  })
    .then((result)=>{
      res.redirect('/listar');
    })
    .catch((err)=>{
      console.log("Erro: ", err);
    });
});

router.get('/veiculo/:id',(req,res)=>{
  Promise.all([
    veiculo.findById(req.params.id,{
      include:[{
        model: cor
      },{
        model: modelo
      },{
        model: combustivel
      },{
        model: propriedade
      },{
        model: status
      }]
    }),
    modelo.findAll(),
    cor.findAll(),
    combustivel.findAll(),
    propriedade.findAll(),
    status.findAll()
  ])
  .then((result)=>{
    var veiculos = result[0];
    var modelos = result[1];
    var cores = result[2];
    var combustiveis = result[3];
    var propridades = result[4];
    var status = result[5];
    res.render('editarVeiculo',{
      message: 'Editar Veiculo',
      veiculos, modelos, cores, combustiveis, propridades, status
    });
  })
  .catch((err)=>{
    console.log("ERROR: ",err);
  });
});

router.post('/veiculo/:id',(req,res)=>{
  veiculo.update(req.body,{
    where:{
      id: req.params.id
    }
  })
    .then(()=>{
      res.redirect('/listar')
    })
    .catch((err)=>{
      console.log("ERRO: ",err);
    });
})

module.exports = router;
