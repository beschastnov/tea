import React, { useEffect, useState } from 'react';
import Card from '../ui/Card';
import FormLogin from '../ui/FormLogin';
import FormReg from '../ui/FormReg';

function Main({ allTeas }) {
  const [teas, setTeas] = useState(allTeas || null);

  useEffect(() => {
    fetch('/api/allteas')
      .then((res) => res.json())
      .then((data) => setTeas(data));
  }, []);

  return (
    <>
      <div>
        <h1>Добро пожаловать на сайт Чайный дом</h1>
        <h1>Пoзнакомьтесь с нашим ассортиментом</h1>
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
      }}
      >
        {teas?.map((tea) => (
          <Card key={tea.id} tea={tea} />
        ))}
      </div>
      <div className="authBlock">
        <div
          className="authBlock__container"
          style={{
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          <div className="authBlock__leftBlock">
            <h1>Зарегестрируйтесь</h1>
            <FormReg />
          </div>
          <div className="authBlock__rightBlock">
            <h1>Авторизуйтесь</h1>
            <FormLogin />
          </div>
        </div>
      </div>

    </>
  );
}

export default Main;
