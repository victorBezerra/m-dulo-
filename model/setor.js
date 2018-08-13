const Sequelize = require('sequelize');
const sequelize = new Sequelize("mysql://root@localhost:3306/transporte");

const Setor = sequelize.define("setores",{
  id:{
    type: Sequelize.BIGINT,
    autoIncrement: true,
    primaryKey:true
  }
  setor:{
    type: Sequelize.STRING
  }
  setorpai:{
    type: Sequelize.STRING
  }
  status:{
    type: Sequelize.STRING
  }
  chefe:{
    type: Sequelize.STRING
  }
  vice:{
    type: Sequelize.STRING
  }
  secretario:{
  type: Sequelize.STRING
  }
  telefone:{
    type: Sequelize.STRING
  }
  email:{
    type: Sequelize.STRING
  }
  sigla:{
    type: Sequelize.STRING
  },
  {
    freezeTableName:true,
    timestamps:false
  });

module.exports = Setor;
