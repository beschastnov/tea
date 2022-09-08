module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          login: 'admin',
          pass: 'admin',
          f_name: 'admin',
          l_name: 'admin',
          is_admin: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          login: 'mikle',
          pass: '123',
          f_name: 'Михаил',
          l_name: 'Бесчастнов',
          is_admin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
