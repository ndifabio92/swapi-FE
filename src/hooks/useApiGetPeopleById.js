import { useState, useEffect } from 'react';

const useApiGetPeopleById = (id) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch(`${process.env.REACT_APP_BASE_URL_API}people/${id}`);
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
    }, []);
    return { data, loading, error };
};

export default useApiGetPeopleById;