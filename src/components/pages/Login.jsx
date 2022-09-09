import React from 'react';
import Form from '../ui/FormLogin';

function Login({ session, setSession }) {
  return (
    <div
      className="form-block"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '10%',
        width: '600px',
        height: '400px',
      }}
    >
      <Form session={session} setSession={setSession} />
    </div>
  );
}

export default Login;
