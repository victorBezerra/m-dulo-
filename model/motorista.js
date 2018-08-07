const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root@localhost:3306/transporte');


var Motorista = sequelize.define('motoristas',{
  nome:{
    type: Sequelize.TEXT
  },
  nomeFantasia:{
    type: Sequelize.TEXT
  },
  cpf:{
    type: Sequelize.BIGINT,
    primaryKey: true
  },
  insEstadual:{
    type: Sequelize.BIGINT
  },
  representante:{
    type: Sequelize.TEXT
  },
  endereco:{
    type: Sequelize.TEXT
  },
  bairro:{
    type: Sequelize.TEXT
  },
  cidade:{
    type: Sequelize.TEXT
  },
  estado:{
    type: Sequelize.TEXT
  },
  cep:{
    type: Sequelize.INTEGER
  },
  email:{
    type: Sequelize.TEXT
  },
  site:{
    type: Sequelize.TEXT
  },
  telefone:{
    type: Sequelize.TEXT
  },
  nit:{
    type: Sequelize.INTEGER
  },
  tipo:{
    type: Sequelize.TEXT
  }
},{
  freezeTableName: true,
  timestamps: false
});

module.exports = Motorista;
