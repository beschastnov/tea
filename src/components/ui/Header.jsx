import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header({ session, setSession }) {
  
  const navigate = useNavigate();
  
  const logoutHandler = async () => {
    const response = await fetch('/auth/logout');
    if (response.ok) {
      navigate('/');
    }
  };
  return (
    <div>
      <div className="header">
        <div className="container">
          <div className="header__content">
            <div className="header__left-block">
              <Link to="/"><img src="https://images.squarespace-cdn.com/content/v1/60d0c4dac6973748d5d9a7f5/1624916195210-MO3DSK8SGUW508HG14QN/WEBLOGO.png" /></Link>
            </div>
            <div className="header__right-block">
              <Link to="/teas">Чаи мира</Link>
              <Link to="/login">Авторизация</Link>
              <Link to="/registration">Регистрация</Link>
              <p>Личный кабинет</p>
              <p>Имя пользователя</p>
              <Link to="/adminprofile">Админка</Link>
              <Link onClick={logoutHandler} to="/">Выйти</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
