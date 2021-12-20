'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    const Product = queryInterface.createTable('Product', { 
      id: { 
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
     },
     name: { 
       type: Sequelize.STRING,
    },
     description: { 
        type: Sequelize.STRING,
    },
    price: { 
        type: Sequelize.INTEGER,
     },
    image: { 
        type: Sequelize.STRING,
    }
     });

    return Product
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};

