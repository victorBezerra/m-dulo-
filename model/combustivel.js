const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root@localhost:3306/transporte');

var Combustivel = sequelize.define('Combustiveis',{
  id:{
    type: Sequelize.BIGINT,
    primaryKey:true,
    autoIncrement: true
  },
  descricao:{
    type: Sequelize.TEXT
  }
},{
  timestamps: false
});

module.exports = Combustivel;
