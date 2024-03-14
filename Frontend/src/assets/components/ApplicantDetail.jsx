import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../useFetch';

function ApplicantDetail() {
  const { detailId } = useParams();
  const { data, loading, error } = useFetch(
    `http://localhost:3030/applicants/${detailId}`,
  );
  console.log(detailId);
  return (
    <>
      {error && <h2>El error es: {error}</h2>}
      {loading && <h2>Loading...</h2>}
      {data && (
        <section className="detailSection">
          <div className="detailDiv">
            <img
              src={data.image}
              alt="Profile"
              style={{
                width: '200px',
                borderRadius: '100px',
                border: '5px solid #2751ac',
              }}
            />
            <div className="detailInfo">
              <h2>
                {data.name} {data.lastName}
              </h2>
              <h4>{data.profession.name}</h4>
            </div>
          </div>
          <hr />
          <h5>Contactos:</h5>
          <div className="detailDiv_info">
            <ul>
              <li>
                <i className="bi bi-envelope-at emailIcon"></i>
                {data.email}
              </li>
              <li>
                <i className="bi bi-phone phoneIcon"></i>
                {data.areaCode} {data.phone}
              </li>
              <li>
                <i className="bi bi-linkedin linkedinIcon"></i>
                {data.linkedIn}
              </li>
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
export default ApplicantDetail;
