import { useState, useEffect } from 'react';
import axios from 'axios';

const useApiCall = (resource, page = "1", name = "") => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axios.get(`${process.env.REACT_APP_BASE_URL_API}${resource}/`, {
          params: { search: name, page: page }
        });

        setData(response.data);
        setLoading(false);

      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [resource, page, name]);
  return { data, loading, error };
};

export default useApiCall;
