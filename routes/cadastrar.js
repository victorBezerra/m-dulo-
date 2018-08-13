const express = require('express');
const router = express.Router();
const marca = require('./../model/marca.js');
const carroceria = require('./../model/carroceria.js');
const genero = require('./../model/genero.js');
const tipo = require('./../model/tipo.js');
const especie = require('./../model/especie.js');
const modelo = require('./../model/modelo.js');
const motorista = require('./../model/motorista.js');
const veiculo = require('./../model/veiculo.js');
const combustivel = require('./../model/combustivel.js');
const status = require('./../model/status.js');
const propriedade = require('./../model/propriedade.js');
const cor = require('./../model/cor.js');
const usuario = require ('./../model/usuario.js');
const setor = require ('./../model/setor.js');

router.get('/',(req,res)=>{
  res.render('listaCadastros',{
    message: 'Lista de cadastros'
  });
});

router.get('/marca',(req,res)=>{
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

router.get('/carroceria',(req,res)=>{
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

router.get('/genero',(req,res)=>{
  res.render('cadastrarGenero',{
    message: 'Cadastrar Genero'
  });
});

router.post('/genero',(req,res)=>{
  genero.create(req.body)
    .then(()=>{
      res.redirect('/cadastrar');
    })
    .catch((err)=>{
      console.log("ERRO: ",err);
    });
});

router.get('/tipo',(req,res)=>{
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

router.get('/especie',(req,res)=>{
  res.render('cadastrarEspecie',{
    message: 'Cadastrar Especie'
  });
});

router.post('/especie',(req,res)=>{
  especie.create(req.body)
    .then(()=>{
      res.redirect('/cadastrar');
    })
    .catch((err)=>{
      console.log("ERRO: ", err);
    });
});

router.get('/modelo',(req,res)=>{
  Promise.all([
    marca.findAll(),
    carroceria.findAll(),
    genero.findAll(),
    especie.findAll(),
    tipo.findAll()
  ])
  .then((result)=>{
    const marcas = result[0];
    const carrocerias = result[1];
    const generos = result[2];
    const especies = result[3];
    const tipos = result[4];
    res.render('cadastrarModelo',{
      message: "Cadastrar Modelo",
      marcas, carrocerias, generos, especies, tipos});
  })
});

router.post('/modelo',(req,res)=>{
  modelo.create(req.body)
    .then(()=>{
      res.redirect('/cadastrar');
    })
    .catch((err)=>{
      console.log("Erro: ",err);
    })
})

router.get('/combustivel',(req,res)=>{
  res.render('cadastrarCombustivel',{
    message: 'Cadastrar Combustivel'
  });
});

router.post('/combustivel',(req,res)=>{
  combustivel.create(req.body)
    .then(()=>{
      res.redirect('/cadastrar');
    })
    .catch((err)=>{
      console.log("ERRO: ",err);
    })
});

router.get('/status',(req,res)=>{
  res.render('cadastrarStatus',{
    message: 'Cadastrar Status'
  });
});

router.post('/status',(req,res)=>{
  status.create(req.body)
    .then(()=>{
      res.redirect('/cadastrar');
    })
    .catch((err)=>{
      console.log("ERRO: ",err);
    });
});

router.get('/propriedade',(req,res)=>{
  res.render('cadastrarPropriedade',{
    message: 'Cadastrar Propriedade'
  });
});

router.post('/propriedade',(req,res)=>{
  propriedade.create(req.body)
    .then(()=>{
      res.redirect('/cadastrar');
    })
    .catch((err)=>{
      console.log("ERRO: ",err);
    })
});

router.get('/cor',(req,res)=>{
  res.render('cadastrarCor',{
    message: 'Cadastrar Cor'
  });
});

router.post('/cor',(req,res)=>{
  cor.create(req.body)
    .then(()=>{
      res.redirect('/cadastrar')
    })
    .catch((err)=>{
      console.log("ERRO: ",err);
    })
});

router.get('/veiculo',(req,res)=>{
  Promise.all([
    modelo.findAll(),
    cor.findAll(),
    combustivel.findAll(),
    propriedade.findAll(),
    status.findAll()
  ])
  .then((result)=>{
    var modelos = result[0];
    var cores = result[1];
    var combustiveis = result[2];
    var propridades = result[3];
    var status = result[4];
    res.render('cadastrarVeiculo',{
      message: 'Cadastrar Veiculo',
      modelos, cores, combustiveis, propridades, status
    });
  })
  .catch();
});

router.post('/veiculo',(req,res)=>{
  veiculo.create(req.body)
    .then(()=>{
      res.redirect('/cadastrar');
    })
    .catch((err)=>{
      console.log("ERRO: ",err);
    })
})

router.get('/motorista',(req,res)=>{
  res.render('cadastrarMotorista',{
    message: 'Cadastrar Motorista'
  });
});

router.post('/motorista',(req,res)=>{
  motorista.create(req.body)
    .then(()=>{
      res.redirect('/cadastrar');
    })
    .catch((err)=>{
      console.log("Erro: ", err);
    });
});

router.get('/pedido', (req,res)=>{
  Promise.all([
    tipo.findAll(),
    usuario.findAll(),
    setor.findAll()
  ])
    .then((result)=>{
      console.log("TESTE");
      // var tipos = result[0];
      // var usuarios = result[1];
      // var setores = result[2];
      // res.render('registrarPedido',{
      //   message: 'Solicitação de veículo',
      //   tipos, usuarios, setores
      // })
    })
    .catch((err)=>{
      console.log("ERROR: ", err);
    });
});

module.exports = router;
