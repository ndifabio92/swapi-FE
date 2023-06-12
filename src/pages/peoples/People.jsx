import React, { useState } from "react";
import useApiCall from "../../hooks/useApiCall";
import Loader from "../../components/ui/Loader/Loader";
import { ListPeople } from "./components/ListPeople";
import { Paginator } from "../../components/ui/Pagination/Paginator";
import { swalAlert } from "../../utils/alert";
import { FormSearch } from "../../components/FormSearch/FormSearch";

export const People = () => {
    const [page, setPage] = useState("1");
    const [query, setQuery] = useState("");
    const { data, loading, error } = useApiCall('people', page, query);

    if (error) swalAlert('error', 'Error', 'The API call attempt failed.');

    return (
        <>
            {
                loading ?
                    <Loader isLoading={loading} />
                    :
                    <>
                        <FormSearch query={query} setQuery={setQuery} />
                        <ListPeople data={data} />
                        <Paginator registers={data} handlePageChange={setPage} page={+page} />
                    </>
            }
        </>
    )
}