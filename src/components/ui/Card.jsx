import React from 'react';
import { Link } from 'react-router-dom';

function Card({ tea }) {
  return (
    <div>
      <div className="card" style={{ width: '18rem', height: '500px' }}>
        <img className="card-img-top" src={tea.img} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{tea.name}</h5>
          <p className="card-text">{tea.info}</p>
        </div>
        <div className="card-body">
          <Link to={`/tea/${tea.id}`} className="link-success">Card link</Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
