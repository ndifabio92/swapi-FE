import { useEffect, useState } from 'react';

const useApiGetByUrl = (urls) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);

                const responses = await Promise.all(urls.map((url) => fetch(url)));
                const jsonPromises = responses.map((response) => response.json());
                const jsonData = await Promise.all(jsonPromises);

                setData(jsonData);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, [urls]);

    return { data, loading, error };
};

export default useApiGetByUrl;