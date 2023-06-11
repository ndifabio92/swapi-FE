import React, { useState } from "react";
import useApiCall from "../../hooks/useApiCall";
import Loader from "../../components/ui/Loader/Loader";
import { ListPeople } from "./components/ListPeople";
import { Paginator } from "../../components/ui/Pagination/Paginator";

export const People = () => {
    const [page, setPage] = useState("1");
    const { data, loading, error } = useApiCall('people', page);

    return (
        <>
            {
                loading ?
                    <Loader isLoading={loading} />
                    :
                    <>
                        <ListPeople data={data} />
                        <Paginator registers={data} handlePageChange={setPage} page={+page} />
                    </>
            }
        </>
    )
}