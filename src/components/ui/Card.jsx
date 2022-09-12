import React from 'react';
import { Link } from 'react-router-dom';

function Card({ tea, session, deleteHandler }) {
  return (
    <div>
      <div
        className="card"
        style={{
          width: '18rem', height: '600px', alignItems: 'center', textAlign: 'center',
        }}
      >
        <img className="card-img-top" src={tea.img} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{tea.name}</h5>
          <p className="card-text">{tea.info}</p>
        </div>
        <div className="card-body" style={{ fontsColor: 'white' }}>
          <Link to={`/tea/${tea.id}`} className="link-success" style={{ marginBottom: '10px' }}>
            Подробнее
          </Link>
          {session?.userAdmin ? (
            <div>
              {' '}
              <button onClick={() => deleteHandler(tea.id)} style={{ width: '200px' }} className="btn btn-danger">Удалить чай</button>
            </div>
          ) : (<></>)}

        </div>
      </div>
    </div>
  );
}

export default Card;
