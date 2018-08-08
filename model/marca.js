const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:@localhost:3306/transporte');

const Marca = sequelize.define('marcas',{
  id:{
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  descricao:{
    type: Sequelize.TEXT,
    validate:{
      notEmpty: true
    }
  }
},{
  freezeTableName: true,
  timestamps: false,
  validate:{
    isEmpty(descricao){
      if(descricao === null){
        throw new Erro('Preencha os campos vazios!!')
      }
    }
  }
});

module.exports = Marca;
