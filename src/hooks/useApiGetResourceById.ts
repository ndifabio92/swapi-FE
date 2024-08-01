import axios from 'axios';
import { useEffect, useState } from 'react';

interface Props {
    id: string | undefined,
    resource: string
}

const useApiGetResourceById = <T,>({ id, resource }: Props) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await axios.get<T>(`${import.meta.env.VITE_APP_BASE_URL_API}${resource}/${id}`);

                setData(response.data);
                setLoading(false);

            } catch (error) {
                console.error(error);
                setError(new Error('An unexpected error occurred'));
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);
    return { data, loading, error };
};

export default useApiGetResourceById;