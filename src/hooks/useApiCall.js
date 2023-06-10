import { useState, useEffect } from 'react';

const useApiCall = (resource,name="", page = "1") => {
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
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [resource,page]);
  return { data, loading, error };
};

export default useApiCall;
