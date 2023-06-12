import React from "react";
import useApiCall from "../../hooks/useApiCall";
import Loader from "../../components/ui/Loader/Loader";
import { ListMovies } from "./components/ListMovies";
import { swalAlert } from "../../utils/alert";

export const Films = () => {
    const { data, loading, error } = useApiCall('films');
    if (error) swalAlert('error', 'Error', 'The API call attempt failed.');
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