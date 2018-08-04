const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root@localhost3306/transporte');

var Modelo = sequelize.define('modelo',{
  id:{
    type: Sequelize.BIGINT,
    primaryKey:true
  },
  idEspecie:{
    type: Sequelize.BIGINT
  },
  idCarroceria:{
    type: Sequelize.BIGINT
  },
  idMarca:{
    type: Sequelize.BIGINT
  },
  idTipo:{
    type: Sequelize.BIGINT
  },
  idGenero:{
    type: Sequelize.BIGINT
  },
  ativo:{
    type: Sequelize.STRING
  },
  descricao:{
    type: Sequelize.TEXT
  }
});

module.exports = Modelo;
