import React from 'react';

function Nav() {
  return (
    <>
      <nav>
        <section className="menu">
          <h3>Opciones</h3>
          <ul>
            <li>
              <a href="#">
                <i
                  className="bi bi-building"
                  style={{ fontSize: '1.2rem', color: 'cornflowerblue' }}
                ></i>
                - Empresas
              </a>
            </li>
            <li>
              <a href="#">
                <i
                  className="bi bi-person"
                  style={{ fontSize: '1.2rem', color: 'cornflowerblue' }}
                ></i>
                - Aspirantes
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-list-check"></i>- Profesiones
              </a>
            </li>
            <li>
              <a href="#">
                <i
                  className="bi bi-person-vcard"
                  style={{ fontSize: '1.2rem', color: 'cornflowerblue' }}
                ></i>
                - Postulate aquí
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-chat-left-text"></i>- Contacto
              </a>
            </li>
          </ul>
        </section>
      </nav>
    </>
  );
}

export default Nav;
