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

  console.log(inputs);
  return (
    <form onSubmit={submitHandler}>
      <div className="form-group mb-3">
        <label htmlFor="exampleInputEmail">
          Имя
          <input onChange={inputsHandler} name="fName" value={inputs.fName} type="text" className="form-control input" id="exampleInputEmail" />
        </label>
      </div>
      <div className="form-group mb-3">
        <label htmlFor="exampleInputPassword">
          Фамилия
          <input onChange={inputsHandler} name="lName" value={inputs.lName} type="text" className="form-control input" id="exampleInputPassword" />
        </label>
      </div>
      <div className="form-group mb-3">
        <label htmlFor="exampleInputEmail1">
          Логин
          <input onChange={inputsHandler} name="login" value={inputs.login} type="text" className="form-control input" id="exampleInputEmail1" />
        </label>
      </div>
      <div className="form-group mb-3">
        <label htmlFor="exampleInputPassword1">
          Пароль
          <input onChange={inputsHandler} name="pass" value={inputs.pass} type="password" className="form-control input" id="exampleInputPassword1" />
        </label>
      </div>
      <button type="submit" className="btn btn-outline-success mb-3">Зарегистрироваться</button>
    </form>

  );
}

// import React, { useState } from 'react';

// export default function FormReg() {
//   const [inputs, setInputs] = useState({
//     fName: '', lName: '', login: '', pass: '',
//   });
//   const inputHandler = (e) => {
//     setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };
//   const submitHandler = async (e) => {
//     e.preventDefault();
//     const response = await fetch('/auth/registration', {
//       method: 'POST',
//       headers: {
//         'Content-type': 'application/json',
//       },
//       body: JSON.stringify(inputs),
//     });
//     if (response.ok) {
//       console.log('Все верно');
//     } else {
//       console.log('Неправильный логин или пароль');
//     }
//   };
//   return (
//     <form onSubmit={submitHandler}>
//       <label htmlFor="exampleInputEmail">
//         Имя
//         <input onChange={inputHandler} name="fName" value={inputs.fName} type="text" className="form-control input" id="exampleInputEmail" />
//       </label>

//       <div className="form-group mb-3">
//         <label htmlFor="exampleInputPassword">
//           Фамилия
//           <input onChange={inputHandler} name="lName" value={inputs.lName} type="text" className="form-control input" id="exampleInputPassword" />
//         </label>
//       </div>

//       <div className="form-group mb-3">
//         <label htmlFor="exampleInputEmail1">
//           Логин
//           <input onChange={inputHandler} name="login" type="text" className="form-control input" id="exampleInputEmail1" />
//         </label>
//       </div>
//       <div className="form-group mb-3">
//         <label htmlFor="exampleInputPassword1">
//           Пароль
//           <input onChange={inputHandler} name="password" type="password" className="form-control input" id="exampleInputPassword1" />
//         </label>
//       </div>
//       <button type="submit" className="btn btn-outline-success mb-3">Авторизоваться</button>
//     </form>
//   );
// }
