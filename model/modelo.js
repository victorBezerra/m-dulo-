const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root@localhost:3306/transporte');

var Modelo = sequelize.define('modelos',{
  id:{
    type: Sequelize.BIGINT,
    primaryKey:true,
    autoIncrement: true
  },
  id_marca:{
    type: Sequelize.BIGINT,
    foreingKey: true
  },
  id_tipo:{
    type: Sequelize.BIGINT,
    foreingKey: true
  },
  id_carroceria:{
    type: Sequelize.BIGINT,
    foreingKey: true
  },
  id_genero:{
    type: Sequelize.BIGINT,
    foreingKey: true
  },
  id_especie:{
    type: Sequelize.BIGINT,
    foreingKey: true
  },
  descricao:{
    type: Sequelize.TEXT
  },
  ativo:{
    type: Sequelize.STRING
  }
},{
  freezeTableName: true,
  timestamps: false
});

module.exports = Modelo;
