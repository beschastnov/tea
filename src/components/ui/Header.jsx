import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const logoutHandler = async () => {
    const response = await fetch('/auth/logout');
    if (response.ok) {
      console.log('logout работает');
    }
  };
  return (
    <div>
      <div className="header">
        <div className="container">
          <div className="header__content">
            <div className="header__left-block">
              <img src="https://images.squarespace-cdn.com/content/v1/60d0c4dac6973748d5d9a7f5/1624916195210-MO3DSK8SGUW508HG14QN/WEBLOGO.png" />
            </div>
            <div className="header__right-block">
              <Link to="/login">Авторизация</Link>
              <Link to="/registration">Регистрация</Link>
              <p>Личный кабинет</p>
              <p>Имя пользователя</p>
              <Link onClick={logoutHandler} to="/">Выйти</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
