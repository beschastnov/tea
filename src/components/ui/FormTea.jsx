import React, { useState } from 'react';

function FormTea() {
  const [inputs, setInputs] = useState({
    name: '', place: '', img: '', info: '',
  });

  const changeHandler = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/addtea', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(inputs),
    });
    if (response.ok) {
      const data = await response.json();
      setInputs(data);
      setInputs({
        name: '', place: '', img: '', info: '',
      });
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <label>Название чая</label>
        <input type="text" value={inputs.name} onChange={changeHandler} name="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Название чая" />
      </div>
      <div className="form-group">
        <label>Место культивации</label>
        <input type="text" value={inputs.place} onChange={changeHandler} name="place" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Место культивации" />
      </div>
      <div className="form-group">
        <label>Изображение</label>
        <input type="text" value={inputs.img} onChange={changeHandler} name="img" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ссылка на изображение" />
      </div>
      <div className="form-group">
        <label>Описание чая</label>
        <input type="text" value={inputs.info} onChange={changeHandler} name="info" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Описание чая" />
      </div>
      <button type="submit" className="btn btn-primary">Добавить</button>
    </form>
  );
}

export default FormTea;
