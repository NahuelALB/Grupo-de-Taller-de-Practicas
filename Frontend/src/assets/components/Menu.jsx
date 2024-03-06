import React from 'react';
import { Link } from 'react-router-dom';
//Importar Componentes
import Nav from '../components/Nav';
//Importar Imagenes
import logo from '../img/logo-dh.png';

function Menu() {
  return (
    <>
      <header className="menu-wrap">
        <figure className="user">
          <div className="user-avatar">
            <img src={logo} alt="Logo" />
          </div>
          <Link to="/">
            <figcaption>Digital House</figcaption>
          </Link>
        </figure>
        {/* {Nav Component} */}
        <Nav />
      </header>
    </>
  );
}

export default Menu;
