const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root@localhost:3306/transporte');

var Genero = sequelize.define('genero',{
  id:{
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  descricao:{
    type: Sequelize.TEXT
  }
},{
  timestamps: false
});

module.exports = Genero;
