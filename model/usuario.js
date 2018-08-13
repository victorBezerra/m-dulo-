const Sequelize = require('sequelize');
const sequelize = new Sequelize("mysql://root@localhost:3306/transporte");

const Usuario = sequelize.define("usuarios",{
  id:{
    type: Sequelize.BIGINT,
    primaryKey:true,
    autoIncrement:true
  },
  nome:{
    type: Sequelize.TEXT
  },
  cpf:{
    type: Sequelize.INTEGER
  },
  funcao:{
    type: Sequelize.TEXT
  },
  senha:{
    type: Sequelize.TEXT
  },
  email:{
    type: Sequelize.TEXT
  },
  cpf:{
    type: Sequelize.TEXT
  },
  status:{
    type: Sequelize.TEXT
  }
  },{
    timestamps:false,
    freezeTableName:true
});

module.exports = Usuario;
