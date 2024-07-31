import axios from 'axios';
import { useEffect, useState } from 'react';



interface Props {
    urls: string[] | undefined
}

const useApiGetAllUrls = <T,>({ urls }: Props) => {
    const [data, setData] = useState<T[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);
    console.log('urls', urls)

    useEffect(() => {
        const fetchData = async () => {
            try {

                setLoading(true);
                setError(null);
                console.log('urls inside fetchData:', urls);
                if (urls && urls.length > 0) {
                    console.log('ingrese al urls')
                    const requests = urls.map((url) => axios.get<T>(url));

                    const responses = await Promise.all(requests);
                    const jsonData = responses.map((response) => response.data);
                    console.log('jsonData', jsonData)
                    setData(jsonData);
                }

                setLoading(false);
            } catch (error) {
                console.error(error);
                setError(new Error('An unexpected error occurred'));
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [urls]);

    return { data, loading, error };
};

export default useApiGetAllUrls;