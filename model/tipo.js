const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root@localhost3306/transporte');

var Tipo = sequilize.define('tipo',{
  id:{
    type: Sequelize.BIGINT,
    primaryKey: true
  }
  descricao:{
    type: Sequilize.TEXT
  }
});

module.exports = Tipo;
