const Sequelize = require('sequelize');
const sequelize = new Sequelize ('mysql://root@localhost:3306');

var Veiculo = sequelize.define('veiculos',{
  id{
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  placa{
    type: Sequelize.TEXT
  },
  descricao{
    type: Sequelize.BIGINT
  },
  qtd_max_pass{
    type: Sequelize.BIGINT
  },
  ano_modelo{
    type: Sequelize.INTEGER
  },
  ano_fabricacao{
    type: Sequelize.INTEGER
  },
  id_modelo{
    type:Sequelize.BIGINT
  },
  id_cor{
    type:Sequelize.BIGINT
  },
  id_combustivel{
    type:Sequelize.BIGINT
  },
  id_propriedade{
    type:Sequelize.BIGINT
  },
  id_status{
    type:Sequelize.BIGINT
  }
},{
  timestamps: false
});

module.exports = Veiculo;
