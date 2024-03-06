import React, { useState, useRef, useEffect } from 'react';

function CardApplicant() {
  /*   const reference = useRef();
  console.log(reference.current);
  reference.current.innerHTML += 'Nuevo valor'; */

  return (
    <>
      <div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
        <div className="box-avatar">
          <img src="./assets/img/foto1.jpg" alt="Gloria" />
        </div>
        <div className="box-bio">
          <h2 className="bio-name">Gloria Medina</h2>
          <p className="bio-position">Administrador</p>
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
