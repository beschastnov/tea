import React, { useEffect, useState } from 'react';
import ComentCard from './ComentCard';
import FormAddComent from './FormAddComent';

export default function AllComentsInCardPage({
  allComents, teaId, session, setSession,
}) {
  const [comentArr, setComentArr] = useState(allComents || null);
  useEffect(() => {
    fetch(`/api/tea/${teaId}/allComents`)
      .then((res) => res.json())
      .then((data) => setComentArr(data));
  }, []);

  const deleteHandler = async (id) => {
    const response = await fetch(`/api/delete/${id}`, { method: 'delete' });
    if (response.ok) {
      setComentArr((prev) => prev.filter((el) => el.id !== id));
    }
  };

  return (
    <div style={{ width: '450px' }}>
      {session ? (
        <FormAddComent id={teaId} setComentArr={setComentArr} />
      ) : (<></>)}
      {comentArr ? comentArr.map((el) => (
        <div key={`${el.id}-${el.text}`}>
          <ComentCard el={el} deleteHandler={deleteHandler} session={session} setSession={setSession} />
          {' '}
        </div>
      )) : 'ничего нет'}
    </div>
  );
}
