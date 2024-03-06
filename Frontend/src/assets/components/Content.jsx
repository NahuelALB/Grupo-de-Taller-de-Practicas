import React from 'react';
import Prevent from '../components/Prevent';
import Applicant from '../components/Applicant';
import Profession from '../components/Profession';

function Content() {
  return (
    <main className="content-wrap">
      <Prevent />
      <Applicant />
      <Profession />
    </main>
  );
}

export default Content;
