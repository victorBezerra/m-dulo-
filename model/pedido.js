const Sequelize = require('sequelize');
const sequelize = new Sequelize("mysql://root@localhost:3306/transporte");

const Pedido = sequelize.define("pedidos",{
  id:{
    type: Sequelize.BIGINT,
    primaryKey:true,
    autoIncrement: true
  },
  tipoTransporte:{
    type: Sequelize.BIGINT
  },
  qtdPass:{
    type: Sequelize.INTEGER
  },
  dataPedido:{
      type: Sequelize.DATE
  },
  horaPedido:{
    type: Sequelize.TIME
  },
  solicitante:{
    type: Sequelize.INTEGER
  },
  setorSolicitante:{
    type: Sequelize.INTEGER
  },
  localPartida:{
    type: Sequelize.TEXT
  },
  localDestino:{
    type: Sequelize.TEXT
  },
  localRetorno:{
    type: Sequelize.TEXT
  },
  viagemAer:{
    type: Sequelize.STRING
  },
  dataPartida:{
    type: Sequelize.DATE
  },
  horaPartida:{
    type: Sequelize.TIME
  },
  dataChegada:{
    type: Sequelize.DATE
  },
  horaChegada:{
    type: Sequelize.TIME
  },
  proposto:{
    type: Sequelize.TEXT
  },
  telefone:{
    type: Sequelize.STRING
  },
  email:{
    type: Sequelize.STRING
  },
  obj:{
    type: Sequelize.TEXT
  },
  finalidade:{
    type: Sequelize.TEXT
  }
  },{
      timestamps: false,
      freezeTableName: true
});


module.exports = Pedido;
