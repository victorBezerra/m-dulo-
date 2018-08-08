const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root@localhost:3306/transporte');

var Status = sequelize.define('status',{
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

module.exports = Status;
