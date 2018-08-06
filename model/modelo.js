const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root@localhost:3306/transporte');

var Modelo = sequelize.define('modelo',{
  id:{
    type: Sequelize.BIGINT,
    primaryKey:true,
    autoIncrement: true
  },
  idEspecie:{
    type: Sequelize.BIGINT,
    foreingKey: true
  },
  idCarroceria:{
    type: Sequelize.BIGINT,
    foreingKey: true
  },
  idMarca:{
    type: Sequelize.BIGINT,
    foreingKey: true
  },
  idTipo:{
    type: Sequelize.BIGINT,
    foreingKey: true
  },
  idGenero:{
    type: Sequelize.BIGINT,
    foreingKey: true
  },
  ativo:{
    type: Sequelize.STRING
  },
  descricao:{
    type: Sequelize.TEXT
  }
},{
  timestamps: false
});

module.exports = Modelo;
