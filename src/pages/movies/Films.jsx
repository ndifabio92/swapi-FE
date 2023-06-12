import React from "react";
import useApiCall from "../../hooks/useApiCall";
import Loader from "../../components/ui/Loader/Loader";
import { ListMovies } from "./components/ListMovies";
export const Films = () => {
    const { data, loading, error } = useApiCall('films');
    return (
        <>
            {
                loading ?
                    <Loader isLoading={loading} /> :
                    <ListMovies data={data} />
            }
        </>
    )
}