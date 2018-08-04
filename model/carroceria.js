const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root@localhost3306/transporte');

var Carroceria = sequelize.define('carroceria',{
  id:{
    type: Sequelize.BIGINT,
    primaryKey: true
  },
  descricao:{
    type: Sequelize.STRING
  }
});

module.exports = Carroceria;
