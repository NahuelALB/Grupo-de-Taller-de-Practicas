import React, { Suspense } from 'react';
import { useFetch } from '../useFetch';
// import { fetchData } from '../fetchingData';

// const apiData = fetchData('http://localhost:3030/professions');

function Profession() {
  /*   const data = apiData.read();
  console.log(data); */
  const { data, loading, error } = useFetch(
    'http://localhost:3030/professions',
  );
  console.log(data);
  return (
    <>
      <section className="content profesiones">
        <h2 className="mt-3">Profesiones</h2>
        <div className="list-group shadow-sm p-3 mb-5 rounded">
          <h4
            className="list-group-item list-group-item-action active text-center"
            aria-current="true"
          >
            Listado de Profesiones
          </h4>
          {/*           <button
            type="button"
            className="list-group-item list-group-item-action text-center"
          >
            Abogado
          </button> */}
          {error && <h4>Error: {error}</h4>}
          {loading && <h4>Loading...</h4>}
          {data &&
            data.map((item, index) => (
              <button
                key={index}
                type="button"
                className="list-group-item list-group-item-action text-center"
              >
                {item.name}
              </button>
            ))}
        </div>
      </section>
    </>
  );
}

export default Profession;
