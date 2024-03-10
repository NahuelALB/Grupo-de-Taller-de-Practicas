import React from 'react';
import CardApplicant from '../components/CardApplicant';
import { useFetch } from '../useFetch';

function Applicant() {
  const { data, loading, error } = useFetch('http://localhost:3030/applicants');

  return (
    <>
      <section className="content aspirantes">
        <h2>Aspirantes</h2>
        <article className="person-boxes">
          {error && <h3>Error: {error}</h3>}
          {loading && <h3>Loading...</h3>}
          {data &&
            data.map((item, index) => {
              return <CardApplicant key={index} item={item} />;
            })}
        </article>
      </section>
    </>
  );
}

export default Applicant;
