import React, {useState} from "react";
import useApiCall from "../../hooks/useApiCall";
import Loader from "../../components/ui/Loader/Loader";
import {swalAlert} from "../../utils/alert";
import {ListComponent} from "../../components/listComponent/ListComponent";
import {CardItemMovies} from "./components/CardItemMovies";

export const Films = () => {
    const [page, setPage] = useState("1");
    const [query, setQuery] = useState("");
    const {data, loading, error} = useApiCall('films', page, query);

    if (error) swalAlert('error', 'Error', 'The API call attempt failed.');

    return (
        <>
            {
                loading ?
                    <Loader isLoading={loading}/>
                    :
                    <ListComponent
                        data={data}
                        CardComponent={CardItemMovies}
                        page={+page}
                        setPage={setPage}
                        query={query}
                        setQuery={setQuery}
                    />
            }
        </>
    )
}