import React from 'react';
import Nav from '../components/Nav';

function Menu() {
  return (
    <>
      <header className="menu-wrap">
        <figure className="user">
          <div className="user-avatar">
            <img src="../img/logo-dh.png" alt="Logo" />
          </div>
          <figcaption>Digital House</figcaption>
        </figure>
        {/* {Nav Component} */}
        <Nav />
      </header>
    </>
  );
}

export default Menu;
