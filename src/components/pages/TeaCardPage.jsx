import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AllComentsInCardPage from '../ui/AllComentsInCardPage';
import FormAddComent from '../ui/FormAddComent';

export default function TeaCardPage({ allComents, session, setSession }) {
  const [oneTea, setOneTea] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch(`/api/tea/${id}`)
      .then((res) => res.json())
      .then((data) => setOneTea(data));
  }, []);

  return (
    <>
      <div>{oneTea.name}</div>
      <div>{oneTea.info}</div>
      <div><img src={oneTea.img} alt="" /></div>
      <div>
        <AllComentsInCardPage allComents={allComents} teaId={id} session={session} setSession={setSession} />
      </div>
    </>

  );
}
