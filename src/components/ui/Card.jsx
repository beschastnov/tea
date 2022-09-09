import React from 'react';
import { Link } from 'react-router-dom';

function Card({ tea, deleteHandler, session, setSession }) {
  return (
    <div>
      <div className="card" style={{ width: '18rem' }}>
        <img className="card-img-top" src={tea.img} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{tea.name}</h5>
          <p className="card-text">{tea.info}</p>
        </div>
        <div className="card-body">
          <Link to={`/tea/${tea.id}`} className="card-link">Card link</Link>
          {session?.userAdmin ? (
          <button onClick={() => deleteHandler(tea.id)} className="card-link">Удалить чай</button>
          ) : (<></>)}
        </div>
      </div>
    </div>
  );
}

export default Card;
