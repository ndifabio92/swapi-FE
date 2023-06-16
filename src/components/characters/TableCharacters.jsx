import React from 'react';
import TableComponent from "../table/TableComponent";
import useApiGetAllUrls from "../../hooks/useApiGetAllUrls";
import {headCells} from "../table/headCells/headCellsStarships";
import Loader from "../ui/Loader/Loader";

const TablaCharacters = ({urls}) => {
    const {data, loading, error} = useApiGetAllUrls(urls);
    const array = Object.values(data).map((item) => {
        const {edited, films, pilots, created, ...rest} = item;
        return rest;
    });
    return (
        <>
            {
                loading ? <Loader isLoading={loading}/> :
                    <TableComponent rows={array} headCells={headCells}/>
            }
        </>
    )
}

export default TablaCharacters;