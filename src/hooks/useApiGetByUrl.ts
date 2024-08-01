import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';

const useApiGetByUrl = <T,>(url: string | undefined) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);

                if (url) {
                    const response = await axios.get<T>(url);
                    setData(response.data);
                }

            } catch (error) {
                if (axios.isAxiosError(error)) {
                    console.error(error.message);
                    setError(error as AxiosError);
                } else {
                    console.error(error);
                    setError(new Error('An unexpected error occurred'));
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
};

export default useApiGetByUrl;
