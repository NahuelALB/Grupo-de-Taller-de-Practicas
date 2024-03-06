import React from 'react';
import CardApplicant from '../components/CardApplicant';

function Applicant() {
  return (
    <>
      <section className="content aspirantes">
        <h2>Aspirantes</h2>
        <article className="person-boxes">
          <CardApplicant />
        </article>
      </section>
    </>
  );
}

export default Applicant;
