import React, { useEffect, useState } from 'react';
import Card from '../ui/Card';
import FormLogin from '../ui/FormLogin';
import FormReg from '../ui/FormReg';
import MapComp from '../ui/MapComp';

function Main({ allTeas, session, setSession }) {
  const [teas, setTeas] = useState(allTeas || null);

  useEffect(() => {
    fetch('/api/allteas')
      .then((res) => res.json())
      .then((data) => setTeas(data));
  }, []);

  return (
    <>
      <div className="main__block">
        <h1>Добро пожаловать на сайт Чайный дом</h1>
        <h1>Популярные позиции</h1>
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        marginBottom: '50px',
      }}
      >
        {teas?.map((tea) => (
          <Card key={tea.id} tea={tea} />
        ))}
      </div>
      {!session ? (
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
              <FormReg session={session} setSession={setSession} />
            </div>
            <div className="authBlock__rightBlock">
              <h1>Авторизуйтесь</h1>
              <FormLogin session={session} setSession={setSession} />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className="map" style={{ marginTop: '50px' }}>
        <MapComp allTeas={allTeas} />
      </div>
    </>
  );
}

export default Main;
