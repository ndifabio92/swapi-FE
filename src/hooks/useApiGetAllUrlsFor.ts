import axios from 'axios';
import { useState, useEffect } from 'react';

interface Props {
    urls: string[] | undefined
}

const useApiGetAllUrlsFor = <T,>({ urls }: Props) => {
    const [data, setData] = useState<T[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);

                const fetchDataForUrl = async (url: string): Promise<T> => {
                    const response = await axios.get<T>(url);
                    return response.data;
                };

                const fetchDataArray = async () => {
                    const dataArray: T[] = [];
                    if (urls) {
                        for (const url of urls) {
                            const jsonData = await fetchDataForUrl(url);
                            dataArray.push(jsonData);
                        }
                        setData(dataArray);
                    }
                };

                await fetchDataArray();
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

export default useApiGetAllUrlsFor;
