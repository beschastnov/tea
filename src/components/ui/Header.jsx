import React, { useState } from 'react';
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
    <div>
      {console.log(session)}
      ;
      <div className="header">
        <div className="container">
          <div className="header__content">
            <div className="header__left-block">
              <Link to="/"><img src="https://images.squarespace-cdn.com/content/v1/60d0c4dac6973748d5d9a7f5/1624916195210-MO3DSK8SGUW508HG14QN/WEBLOGO.png" /></Link>
            </div>
            <div className="header__right-block">
              <ul className="no-bullets no-margin no-padding right">
                {!session ? (
                  <>
                    <li className="pipe-separate t-light-green left"><Link to="/teas">Чаи мира</Link></li>
                    <li className="pipe-separate t-light-green left"><Link to="/">home</Link></li>
                    <li className="pipe-separate t-light-green left"><Link to="/login">login</Link></li>
                    <li className="pipe-separate t-light-green left"><Link to="/registration">registration</Link></li>
                  </>
                ) : (
                  <div>
                    {session.userAdmin ? (
                      <>
                        <li className="pipe-separate t-light-green left"><Link to="/adminprofile">adminka</Link></li>
                        <li onClick={logoutHandler} className="pipe-separate t-light-green left"><Link to="/auth/logout">logout</Link></li>
                      </>
                    ) : (<li onClick={logoutHandler} className="pipe-separate t-light-green left"><Link to="/auth/logout">logout</Link></li>)}
                  </div>

                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
