import { useState, useEffect } from 'react';

const useApiCall = (resource, page = "1", name = "") => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`${process.env.REACT_APP_BASE_URL_API}${resource}/?search=${name}&page=${page}`);
        const jsonData = await response.json();

        setData(jsonData);
        setLoading(false);

      } catch (error) {
        console.log(error);
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [resource, page, name]);
  return { data, loading, error };
};

export default useApiCall;