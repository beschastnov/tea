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
  return (
    <div>
      {session ? (
        <FormAddComent id={teaId} setComentArr={setComentArr} />
      ) : (<></>)}
      {comentArr ? comentArr.map((el) => (
        <div key={`${el.id}-${el.text}`}>
          <ComentCard el={el} />
          {' '}
        </div>
      )) : 'ничего нет'}
    </div>
  );
}
