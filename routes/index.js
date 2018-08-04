const express = require('express');
const router = express.Router();
const cadastrar = require('./cadastrar.js');
const editar = require('./editar.js');
const listar = require('./listar.js');
const excluir = require('./excluir.js');

router.get('/',(req,res)=>{
  res.render('index',{
    message: 'Início'
  });
});

router.use('/cadastrar', cadastrar);
router.use('/editar', editar);
router.use('/listar', listar);
router.use('/excluir', excluir);

module.exports = router;
