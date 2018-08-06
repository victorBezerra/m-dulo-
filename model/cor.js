const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root@localhost:3306');

var Cor = sequelize.define('cores',{
  id:{
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  descricao:{
    type: Sequelize.TEXT
  }
},{
  timestamps:false
});

module.exports = Cor;
