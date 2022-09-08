module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Teas',
      [
        {
          name: 'Зеленый',
          place: '55.75399399999374,37.62209300000001',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3tDk1mDTzhiw6pDlFxfS7V3n7o8bgleOAUQ&usqp=CAU',
          info: 'Зеленый чай подвергается минимальной ферментации. Такой тип обработки позволяет сохранить высокий уровень антиоксидантов, витаминов и минералов. Чай имеет настой золотисто-желтого цвета, а также легкий и травянистый вкус. Наиболее популярен в Азии.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Белый',
          place: '17.056784581170138,17.756762444388357',
          img: 'https://charitea.ru/wp-content/uploads/2020/01/Vietnam-White-tea-old-trees-635x635.jpg',
          info: 'Слабоферментированный (почти не ферментированный) чай, содержащий типсы (чайные почки). Особенно популярен в Китае, считается максимально полезным. Белый чай имеет светло-желтый цвет и нежный аромат.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Желтый',
          place: '40.44205241118817,-81.33486793436737',
          img: 'https://newtea.ua/sites/default/files/images/Yellow%2Btea.jpg',
          info: 'Слабоферментированный чай из сырья высокого качества. По степени окисления находится между белым и зеленым. Считается очень редким и чаще всего может быть приобретен только в Китае.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Улун',
          place: '63.145986240755605,-136.03305560079517',
          img: 'https://tea.ru/upload/blog/0920/06/01.jpeg',
          info: 'Полуферментированный чай, занимающий среднее положение между черным и зеленым. По степени окисления делится на сильноферментированные (ближе к черному чаю) и слабоферментированные (ближе к зеленому) сорта. Улуны дают настой от светло-желтого до светло-коричневого цвета, вкус насыщенный и яркий.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Teas', null, {});
  },
};
