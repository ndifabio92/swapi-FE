import { useState, useEffect } from 'react';

const useApiGetByUrl = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch(url);
                const jsonData = await response.json();

                setData(jsonData);
                setLoading(false);

            } catch (error) {
                console.error(error);
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);
    return { data, loading, error };
};

export default useApiGetByUrl;