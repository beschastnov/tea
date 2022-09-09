import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header({ session, setSession }) {
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
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{
      marginBottom: "0px"
    }}>
      <Link class="navbar-brand" to="/">
        <img src="https://images.squarespace-cdn.com/content/v1/60d0c4dac6973748d5d9a7f5/1624916195210-MO3DSK8SGUW508HG14QN/WEBLOGO.png" width="30" height="30" className="d-inline-block align-top" alt="" />
        Чайный пакетик
      </Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {!session ? (
            <>
              <li className="nav-item">
                <Link class="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link class="nav-link" to="/login">Логин</Link>
              </li>
              <li className="nav-item">
                <Link class="nav-link" to="/teas">Чаи мира</Link>
              </li>
              <li className="nav-item">
                <Link class="nav-link" to="/registration">Регистрация</Link>
              </li>
            </>
          ) : (
            <div>
              {session.userAdmin ? (
                <>
                  <li className="nav-item">
                    <Link class="nav-link" to="/adminprofile">Администрирование</Link>
                  </li>
                  <li className="nav-item">
                    <Link class="nav-link" to="/teas">Чаи мира</Link>
                  </li>
                  <li className="nav-item">
                    <Link onClick={logoutHandler} class="nav-link" to="/auth/logout">Выйти</Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link class="nav-link" to="/teas">Чаи мира</Link>
                  </li>
                  <li className="nav-item">
                    <Link onClick={logoutHandler} class="nav-link" to="/auth/logout">Выйти</Link>
                  </li>
                </>
              )}
            </div>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Header;
