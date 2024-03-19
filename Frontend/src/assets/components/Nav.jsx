import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <>
      <nav>
        <section className="menu">
          <h3>Opciones</h3>
          <ul>
            <li>
              <Link to="#">
                <i
                  className="bi bi-building"
                  style={{ fontSize: '1.2rem', color: 'cornflowerblue' }}
                ></i>
                - Empresas
              </Link>
            </li>
            <li>
              <Link to="/applicants">
                <i
                  className="bi bi-person"
                  style={{ fontSize: '1.2rem', color: 'cornflowerblue' }}
                ></i>
                - Aspirantes
              </Link>
            </li>
            <li>
              <Link to="/professions">
                <i
                  className="bi bi-list-check"
                  style={{ fontSize: '1.2rem', color: 'cornflowerblue' }}
                ></i>
                - Profesiones
              </Link>
            </li>
            <li>
              <Link to="/applicants/create">
                <i
                  className="bi bi-person-vcard"
                  style={{ fontSize: '1.2rem', color: 'cornflowerblue' }}
                ></i>
                - Postulate aquí
              </Link>
            </li>
            <li>
              <a href="#">
                <i
                  className="bi bi-chat-left-text"
                  style={{ fontSize: '1.2rem', color: 'cornflowerblue' }}
                ></i>
                - Contacto
              </a>
            </li>
          </ul>
        </section>
      </nav>
    </>
  );
}

export default Nav;
