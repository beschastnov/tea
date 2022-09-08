import React from 'react';

function Card({ tea }) {
  return (
    <div>
      <div className="card" style={{width: "18rem"}}>
        <img className="card-img-top" src={tea.img} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{tea.name}</h5>
          <p className="card-text">{tea.info}</p>
        </div>
        <div className="card-body">
          <a href="/" className="card-link">Card link</a>
          <a href="/" className="card-link">Another link</a>
        </div>
      </div>
    </div>
  );
}

export default Card;
