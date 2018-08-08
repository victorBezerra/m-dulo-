const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root@localhost:3306/transporte');
const veiculo = require('./veiculo.js');

var Cor = sequelize.define('cores',{
  idCor:{
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    field: 'id'
  },
  descricao:{
    type: Sequelize.TEXT
  }
},{
  freezeTableName: true,
  timestamps:false
});


module.exports = Cor;
