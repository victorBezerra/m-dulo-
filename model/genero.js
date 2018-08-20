const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root@localhost:3306/transporte');

var Genero = sequelize.define('generos',{
  id:{
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true
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
  timestamps: false
});

module.exports = Genero;
