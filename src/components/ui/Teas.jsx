import React, { useEffect, useState } from 'react';
import Card from './Card';

function Teas({ allTeas }) {
  const [teas, setTeas] = useState(allTeas || null);

  useEffect(() => {
    fetch('/teas')
      .then((res) => res.json())
      .then((data) => setTeas(data));
  }, []);

  return (
    <>
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
      }}
      >
        {teas?.map((tea) => (
          <Card key={tea.id} tea={tea} />
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
