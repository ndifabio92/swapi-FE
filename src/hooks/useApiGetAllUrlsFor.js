import { useState, useEffect } from 'react';

const useApiGetAllUrlsFor = (urls) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);

                const fetchDataForUrl = async (url) => {
                    const response = await fetch(url);
                    const jsonData = await response.json();
                    return jsonData;
                };

                const fetchDataArray = async () => {
                    const dataArray = [];
                    for (const url of urls) {
                        const jsonData = await fetchDataForUrl(url);
                        dataArray.push(jsonData);
                    }
                    setData(dataArray);
                };

                await fetchDataArray();
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

export default useApiGetAllUrlsFor;
