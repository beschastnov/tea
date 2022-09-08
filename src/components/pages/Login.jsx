import React from 'react';
import Form from '../ui/FormLogin';

function Login() {
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
      <Form />
    </div>
  );
}

export default Login;
