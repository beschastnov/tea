import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Footer({ session, setSession }) {
  const navigate = useNavigate();

  const logoutHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('/auth/logout');
    if (response.ok) {
      navigate('/');
      setSession(null);
    }
  };

  return (
    <ul className="nav justify-content-center">
      {!session ? (
        <>
          <li className="nav-item">
            <Link class="nav-link active" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link class="nav-link" to="/login">Логин</Link>
          </li>
          <li className="nav-item">
            <Link class="nav-link" to="/teas">Чаи мира</Link>
          </li>
          <li className="nav-item">
            <Link class="nav-link disabled" to="/registration">Регистрация</Link>
          </li>
        </>
      ) : (
        <div>
          {session.userAdmin ? (
            <>
              <li className="nav-item">
                <Link class="nav-link disabled" to="/adminprofile">Администрирование</Link>
              </li>
              <li className="nav-item">
                <Link class="nav-link disabled" to="/teas">Чаи мира</Link>
              </li>
              <li className="nav-item">
                <Link onClick={logoutHandler} class="nav-link disabled" to="/auth/logout">Выйти</Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link class="nav-link disabled" to="/teas">Чаи мира</Link>
              </li>
              <li className="nav-item">
                <Link onClick={logoutHandler} class="nav-link disabled" to="/auth/logout">Выйти</Link>
              </li>
            </>
          )}
        </div>
      )}
    </ul>
  );
}

export default Footer;
