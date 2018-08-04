const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root@localhost3306/transporte');

var Genero = sequelize.define('genero',{
  id:{
    type: Sequelize.BIGINT,
    primaryKey: true
  },
  descricao:{
    type: Sequelize.TEXT
  }
});

module.exports = Genero;
