const express = require('express');
const router = express.Router();
const motorista = require('./../model/motorista');
const veiculo = require('./../model/veiculo');

router.get('/motorista/:cpf',(req,res)=>{
  motorista.destroy({
    where:{
      cpf: req.params.cpf
    }
  })
    .then(()=>{
      res.redirect('/listar');
    })
    .catch((err)=>{
      console.log("ERRO: ",err);
    });
});

router.get('/veiculo/:id',(req,res)=>{
  veiculo.destroy({
    where:{
      id: req.params.id
    }
  })
    .then(()=>{
      res.redirect('/listar');
    })
    .catch((err)=>{
      console.log("ERRO: ",err);
    });
});

module.exports = router;
