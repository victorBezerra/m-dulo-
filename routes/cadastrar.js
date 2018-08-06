const express = require('express');
const router = express.Router();
const marca = require('./../model/marca.js');
const carroceria = require('./../model/carroceria.js');
const genero = require('./../model/genero.js');
const tipo = require('./../model/tipo.js');
const especie = require('./../model/especie.js');

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

router.post('/carroceria',(req,res)=>{
  carroceria.create(req.body)
    .then(()=>{
      res.redirect('/cadastrar')
    })
    .catch((err)=>{
      console.log("Erro: ", err);
    });
});

router.get('/genero', (req,res)=>{
  res.render('cadastrarGenero',{
    message: 'Cadastrar Genero'
  });
});

router.post('/genero', (req,res)=>{
  genero.create(req.body)
    .then(()=>{
      res.redirect('/cadastrar');
    })
    .catch((err)=>{
      console.log("ERRO: ",err);
    });
});

router.get('/tipo', (req,res)=>{
  res.render('cadastrarTipo',{
    message: 'Cadastrar Tipo'
  });
});

router.post('/tipo',(req,res)=>{
  tipo.create(req.body)
    .then(()=>{
      res.redirect('/cadastrar');
    })
    .catch((err)=>{
      console.log("ERRO: ", err);
    });
});

router.get('/especie', (req,res)=>{
  res.render('cadastrarEspecie',{
    message: 'Cadastrar Especie'
  });
});

router.post('/especie', (req,res)=>{
  especie.create(req.body)
    .then(()=>{
      res.redirect('/cadastrar');
    })
    .catch((err)=>{
      console.log("ERRO: ", err);
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
