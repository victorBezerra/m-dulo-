const express = require('express');
const router = express.Router();
const marca = require('./../model/marca.js')

router.get('/', (req,res)=>{
  res.render('listaCadastros',{
    message: 'Lista de cadastros'
  });
});

router.get('/marca', (req,res)=>{
  res.render('cadastrarMarca',{
    message: 'Cadastrar Marca'
  });
});

router.post('/marca',(req,res)=>{
  marca.create(req.body)
    .then(()=>{
      res.redirect('/cadastrar');
    })
    .catch((err)=>{
      console.log("ERRO: ", err);
    });
});

router.get('/carroceria', (req,res)=>{
  res.render('cadastrarCarroceria',{
    message: 'Cadastrar Carroceria'
  });
});

router.get('/genero', (req,res)=>{
  res.render('cadastrarGenero',{
    message: 'Cadastrar Genero'
  });
});

router.get('/tipo', (req,res)=>{
  res.render('cadastrarTipo',{
    message: 'Cadastrar Tipo'
  });
});

router.get('/especie', (req,res)=>{
  res.render('cadastrarEspecie',{
    message: 'Cadastrar Especie'
  });
});

router.get('/modelo', (req,res)=>{
  res.render('cadastrarModelo',{
    message: 'Cadastrar Modelo'
  });
});

router.get('/combustivel', (req,res)=>{
  res.render('cadastrarCombustivel',{
    message: 'Cadastrar Combustivel'
  });
});

router.get('/status', (req,res)=>{
  res.render('cadastrarStatus',{
    message: 'Cadastrar Status'
  });
});

router.get('/propriedade', (req,res)=>{
  res.render('cadastrarPropriedade',{
    message: 'Cadastrar Propriedade'
  });
});

router.get('/cor', (req,res)=>{
  res.render('cadastrarCor',{
    message: 'Cadastrar Cor'
  });
});

router.get('/veiculo', (req,res)=>{
  res.render('cadastrarVeiculo',{
    message: 'Cadastrar Veiculo'
  });
});

router.get('/motorista', (req,res)=>{
  res.render('cadastrarMotorista',{
    message: 'Cadastrar Motorista'
  });
});


// router.get('/marca', (req,res)=>{
//   res.render('listaMarca',{
//     message: 'Teste'
//   })
// });

module.exports = router;
