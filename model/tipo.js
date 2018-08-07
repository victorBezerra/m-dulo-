const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root@localhost:3306/transporte');

var Tipo = sequelize.define('tipo',{
  id:{
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  descricao:{
    type: Sequelize.TEXT
  }
},{
  freezeTableName: true,
  timestamps: false
});

module.exports = Tipo;
