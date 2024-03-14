import React from 'react';
import { Link } from 'react-router-dom';

function CardApplicant({ item }) {
  return (
    <>
      <div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
        <div className="box-avatar">
          <img src={item.image} alt="Profile" />
          {/* ---Colocar la Imagen del Servidor--- */}
        </div>
        <div className="box-bio">
          <h2 className="bio-name">{`${item.name} ${item.lastName}`}</h2>
          <p className="bio-position">{item.profession.name}</p>
        </div>
        <hr />
        <div className="">
          {/*           <button>
            <i className="bi bi-star"></i>
          </button>
          <button>
            <i className="bi bi-chat"></i>
          </button>
          <button>
            <i className="bi bi-envelope"></i>
          </button> */}
          <Link to={`/applicants/${item.id}`}>
            <button className="cardButton" type="button">
              Ver más información
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default CardApplicant;
