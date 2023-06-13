import React, {useState} from "react";
import useApiCall from "../../hooks/useApiCall";
import Loader from "../../components/ui/Loader/Loader";
import {ListComponent} from "../../components/listComponent/ListComponent";
import {swalAlert} from "../../utils/alert";
import {CardItemPeople} from "./components/CardItemPeople";

export const People = () => {
    const [page, setPage] = useState("1");
    const [query, setQuery] = useState("");
    const {data, loading, error} = useApiCall('people', page, query);

    if (error) swalAlert('error', 'Error', 'The API call attempt failed.');

    return (
        <>
            {
                loading ?
                    <Loader isLoading={loading}/>
                    :
                    <ListComponent
                        data={data}
                        CardComponent={CardItemPeople}
                        page={+page}
                        setPage={setPage}
                        query={query}
                        setQuery={setQuery}
                    />
            }
        </>
    )
}