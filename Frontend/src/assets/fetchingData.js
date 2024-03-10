const getSuspender = (promise) => {
  let status = 'pending';
  let response;

  const suspender = promise.then(
    (res) => {
      status = 'success';
      response = res;
    },
    (err) => {
      status = 'error';
      response = err;
    },
  );

  const read = () => {
    switch (status) {
      case 'pending':
        throw suspender;
      case 'error':
        throw response;
      default:
        return response;
    }
  };

  return { read };
};

//Función que tomará el JSON de la API que consumamos
export function fetchData(url) {
  const promise = fetch(url)
    .then((response) => response.json)
    .then((json) => json);

  //Retornará la función getSuspender pasado como parámetro el JSON
  return getSuspender(promise);
}
