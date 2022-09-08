import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function FormReg({ session, setSession }) {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    fName: '', lName: '', login: '', pass: '',
  });

  const inputsHandler = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('/auth/registration', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(inputs),
    });
    if (response.ok) {
      const data = await response.json();
      navigate('/');
      setSession(data);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group mb-3">
        <label>
          Имя
          <input onChange={inputsHandler} name="fName" value={inputs.fName} type="text" className="form-control input" />
        </label>
      </div>
      <div className="form-group mb-3">
        <label>
          Фамилия
          <input onChange={inputsHandler} name="lName" value={inputs.lName} type="text" className="form-control input" />
        </label>
      </div>
      <div className="form-group mb-3">
        <label htmlFor="exampleInputEmail1">
          Логин
          <input onChange={inputsHandler} name="login" value={inputs.login} type="text" className="form-control input" />
        </label>
      </div>
      <div className="form-group mb-3">
        <label>
          Пароль
          <input onChange={inputsHandler} name="pass" value={inputs.pass} type="password" className="form-control input" />
        </label>
      </div>
      <button type="submit" className="btn btn-outline-success mb-3">Зарегистрироваться</button>
    </form>

  );
}
