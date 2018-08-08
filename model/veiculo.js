const Sequelize = require('sequelize');
const sequelize = new Sequelize ('mysql://root@localhost:3306/transporte');
const cor = require('./cor.js');
const modelo = require('./modelo.js');
const combustivel = require('./combustivel.js');
const propriedade = require('./propriedade.js');
const status = require('./status.js');

var Veiculo = sequelize.define('veiculos',{
  id:{
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  placa:{
    type: Sequelize.TEXT
  },
  descricao:{
    type: Sequelize.BIGINT
  },
  qtd_max_pass:{
    type: Sequelize.BIGINT
  },
  ano_modelo:{
    type: Sequelize.INTEGER
  },
  ano_fabricacao:{
    type: Sequelize.INTEGER
  },
  id_modelo:{
    type:Sequelize.BIGINT
  },
  id_cor:{
    type:Sequelize.BIGINT,
  },
  id_combustivel:{
    type:Sequelize.BIGINT
  },
  id_propriedade:{
    type:Sequelize.BIGINT
  },
  id_status:{
    type:Sequelize.BIGINT
  }
},{
  freezeTableName: true,
  timestamps: false
});

Veiculo.hasMany(cor, {
  foreignKey: 'id',
  sourceKey: 'id'
});

Veiculo.hasMany(modelo, {
  foreignKey: 'id',
  sourceKey: 'id'
});

Veiculo.hasMany(combustivel, {
  foreignKey: 'id',
  sourceKey: 'id'
});

Veiculo.hasMany(propriedade, {
  foreignKey: 'id',
  sourceKey: 'id'
});

Veiculo.hasMany(status, {
  foreignKey: 'id',
  sourceKey: 'id'
});

module.exports = Veiculo;
