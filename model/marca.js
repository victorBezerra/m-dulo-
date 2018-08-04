const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:@localhost:3306/transporte');

const Marca = sequelize.define('marcas',{
  descricao:{
    type: Sequelize.TEXT
  },
  timestamps: false
});

module.exports = Marca;
