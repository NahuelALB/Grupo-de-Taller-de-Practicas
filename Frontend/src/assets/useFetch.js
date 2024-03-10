import { useState, useEffect } from 'react';

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data.data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  /*   useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data.data))
      .catch((err) => setData(err));
  }, []); */

  return { data, loading, error };
}
