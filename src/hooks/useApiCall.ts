import { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';

const useApiCall = <T,>(resource: string, page: string = "1", name: string = "") => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<AxiosError | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await axios.get<T>(`${import.meta.env.VITE_APP_BASE_URL_API}${resource}/`, {
                    params: {
                        search: name,
                        page: page
                    }
                });

                setData(response.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setError(error as AxiosError);
                setLoading(false);
            }
        };

        fetchData();
    }, [resource, page, name]);

    return { data, loading, error };
};

export default useApiCall;
