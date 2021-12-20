'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    const Cart = queryInterface.createTable('Cart', { 
      id: { 
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
     },
     ProductId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Product',
        key: 'id'
      }
     },
    quantity: { 
        type: Sequelize.INTEGER,
     },
     });
    return Cart
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