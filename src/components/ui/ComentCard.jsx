import React from 'react';

export default function ComentCard({ el, session, setSession, deleteHandler }) {
  return (


<div class="card">
  <div class="card-header">
  </div>
  <div class="card-body">
    <p class="card-text">{el.text}</p>
    {session.userAdmin ? (
    <button type="button" onClick={() => deleteHandler(el.id)} class="btn btn-danger">Удалить комментарий</button>
    ): (<></>)}
    </div>
</div>
  );
}
