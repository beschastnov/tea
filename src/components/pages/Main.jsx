import React, { useEffect, useState } from 'react';
import Card from '../ui/Card';

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
            <form>
              <div className="form-group mb-3">
                <label htmlFor="exampleInputEmail1">
                  Имя
                  <input name="name" type="text" className="form-control input" id="exampleInputEmail1" />
                </label>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="exampleInputPassword1">
                  Фамилия
                  <input name="password" type="еуче" className="form-control input" id="exampleInputPassword1" />
                </label>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="exampleInputEmail1">
                  Логин
                  <input name="name" type="text" className="form-control input" id="exampleInputEmail1" />
                </label>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="exampleInputPassword1">
                  Пароль
                  <input name="password" type="password" className="form-control input" id="exampleInputPassword1" />
                </label>
              </div>
              <button type="submit" className="btn btn-outline-success mb-3">Авторизоваться</button>
            </form>
          </div>
          <div className="authBlock__rightBlock">
            <h1>Авторизуйтесь</h1>
            <form>
              <div className="form-group mb-3">
                <label htmlFor="exampleInputEmail1">
                  Логин
                  <input name="name" type="text" className="form-control input" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </label>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="exampleInputPassword1">
                  Пароль
                  <input name="password" type="password" className="form-control input" id="exampleInputPassword1" />
                </label>
              </div>
              <button type="submit" className="btn btn-outline-success mb-3">Авторизоваться</button>
            </form>
          </div>
        </div>
      </div>

    </>
  );
}

export default Main;
