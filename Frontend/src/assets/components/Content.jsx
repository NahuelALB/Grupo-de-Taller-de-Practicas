import React from 'react';
import { Route, Routes } from 'react-router-dom';
//Importar Componentes
import Prevent from '../components/Prevent';
import Applicant from '../components/Applicant';
import Profession from '../components/Profession';

function Content() {
  return (
    <main className="content-wrap">
      <Routes>
        <Route path="/" Component={Prevent} />
        <Route path="/applicants" Component={Applicant} />
        <Route path="/professions" Component={Profession} />
      </Routes>
    </main>
  );
}

export default Content;
