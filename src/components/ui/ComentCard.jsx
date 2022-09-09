import React from 'react';

export default function ComentCard({
  el, session, setSession, deleteHandler,
}) {
  return (

    <div className="card" style={{ width: '30rem', marginBottom: '20px' }}>
      <div className="card-header" />
      <div className="card-body">
        <p className="card-text">{el.text}</p>
        {session?.userAdmin ? (
          <button type="button" onClick={() => deleteHandler(el.id)} className="btn btn-danger">Удалить комментарий</button>
        ) : (<></>)}
      </div>
    </div>
  );
}
