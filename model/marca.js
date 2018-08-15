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
      notEmpty: {
        msg: 'Preencha os campos'
      }
    }
  }
},{
  freezeTableName: true,
  timestamps: false,
});

module.exports = Marca;
