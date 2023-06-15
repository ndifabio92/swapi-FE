import React from 'react';
import TableComponent from "../table/TableComponent";
import useApiGetAllUrls from "../../hooks/useApiGetAllUrls";

const TableStarships = ({urls}) => {
    console.log()
    const {data, loading, error} = useApiGetAllUrls(urls);
    const array = Object.values(data).map((item) => {
        const {edited, films, pilots, url, created, ...rest} = item;
        return rest;
    });
    console.log(array)
    return (
        <>
            {
                loading ||
                <TableComponent rows={array}/>
            }
        </>
    )
}

export default TableStarships;