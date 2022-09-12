import React, { useEffect, useState } from 'react';
import Card from './Card';

function Teas({ allTeas, session, setSession }) {
  const [teas, setTeas] = useState(allTeas || null);

  useEffect(() => {
    fetch('/api/allteas')
      .then((res) => res.json())
      .then((data) => setTeas(data));
  }, []);

  const deleteHandler = async (id) => {
    const response = await fetch(`/api/delete/tea/${id}`, { method: 'delete' });
    if (response.ok) {
      setTeas((prev) => prev.filter((el) => el.id !== id));
    }
  };

  return (
    <>
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
      }}
      >
        {teas?.map((tea) => (
          <Card key={tea.id} tea={tea} deleteHandler={deleteHandler} session={session} setSession={setSession} />
        ))}
      </div>
      <div className="authBlock">
        <div
          className="authBlock__container"
          style={{
            display: 'flex',
            justifyContent: 'space-around',
          }}
        />
      </div>

    </>
  );
}

export default Teas;
