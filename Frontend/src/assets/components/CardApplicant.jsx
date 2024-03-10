import React from 'react';

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
        <div className="box-actions">
          <button>
            <i className="bi bi-star"></i>
          </button>
          <button>
            <i className="bi bi-chat"></i>
          </button>
          <button>
            <i className="bi bi-envelope"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default CardApplicant;
