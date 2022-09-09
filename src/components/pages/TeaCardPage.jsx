import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AllComentsInCardPage from '../ui/AllComentsInCardPage';

export default function TeaCardPage({ allComents, session, setSession }) {
  const [oneTea, setOneTea] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch(`/api/tea/${id}`)
      .then((res) => res.json())
      .then((data) => setOneTea(data));
  }, []);

  return (
    <div style={{
      width: '100vw', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center',
    }}
    >
      <div className="card w-50" style={{ marginBottom: '20px', marginTop: '20px', textAlign: 'center' }}>
        <div className="card-header" style={{ textAlign: 'center', backgroundColor: '#6B8E23' }}>
          <h4 style={{ color: 'white', fontSize: '2rem' }}>{oneTea.name}</h4>
        </div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>{oneTea.info}</p>
            <div><img src={oneTea.img} style={{ width: '300px' }} alt="" /></div>
          </blockquote>
        </div>
      </div>
      <AllComentsInCardPage allComents={allComents} teaId={id} session={session} setSession={setSession} />
    </div>

  );
}
