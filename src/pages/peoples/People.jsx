import React, { useState } from "react";
import useApiCall from "../../hooks/useApiCall";
import Loader from "../../components/ui/Loader/Loader";
import { ListPeople } from "./components/ListPeople";
import { Paginator } from "../../components/ui/Pagination/Paginator";
import { getTotalPages } from "../../utils/paginator";

export const People = () => {
    const [page, setPage] = useState("1");
    const { data, loading, error } = useApiCall('people', page);
    const totalPages = getTotalPages(data);

    return (
        <>
            {
                loading ?
                    <Loader isLoading={loading} />
                    :
                    <>
                        <ListPeople data={data} />
                        <Paginator totalPages={totalPages} handlePageChange={setPage} page={+page} totalRegisters={data?.count} />
                    </>

            }

        </>
    )
}