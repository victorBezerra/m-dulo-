const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root@localhost3306/transporte');

var Especie = sequelize.define('especie',{
  id:{
    type: Sequelize.BIGINT,
    primaryKey:true
  },
  descricao:{
    type: Sequelize.BIGINT
  }
});

module.exports = Especie;
