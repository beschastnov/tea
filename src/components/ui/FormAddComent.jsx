import React, { useState } from 'react';

export default function FormAddComent({ id, setComentArr }) {
  const [inputComent, setInputComment] = useState('');
  const inputHandler = (e) => {
    setInputComment(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    fetch('/api/add/comment', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ coment: inputComent, teaId: id }),
    })
      .then((res) => res.json())
      .then((data) => setComentArr((prev) => [...prev, data]));
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="form-group mb-3">
        <label htmlFor="exampleInputEmail1">
          Оставить коментарий
          <input onChange={inputHandler} name="login" type="text" className="form-control input" id="exampleInputEmail1" />
        </label>
      </div>
      <button type="submit" className="btn btn-outline-success mb-3">Отправить</button>
    </form>
  );
}
