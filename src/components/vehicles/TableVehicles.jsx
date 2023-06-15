import React from 'react';
import TableComponent from "../table/TableComponent";
import useApiGetAllUrls from "../../hooks/useApiGetAllUrls";
import {headCells} from "../table/headCells/headCellsVehicles";

const TableVehicles = ({urls}) => {
    const {data, loading, error} = useApiGetAllUrls(urls);
    const array = Object.values(data).map((item) => {
        const {edited, films, pilots, url, created, ...rest} = item;
        return rest;
    });
    return (
        <>
            {
                loading ||
                <TableComponent rows={array} headCells={headCells}/>
            }
        </>
    )
}

export default TableVehicles;