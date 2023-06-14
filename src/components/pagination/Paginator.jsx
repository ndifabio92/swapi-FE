import React from "react";
import { Pagination } from "@mui/material";
import { getTotalPages, viewRegisters } from "../../utils/paginator";
import './styles/paginator.css'

export const Paginator = ({ registers, page, handlePageChange }) => {
    const totalRegisters = registers?.count;
    const totalPages = getTotalPages(registers);
    const { initialRecords, lastRecords } = viewRegisters(registers?.results, page);

    return (
        <div className="container-paginator">
            <Pagination
                className="pagination"
                shape="rounded"
                count={+totalPages}
                page={page}
                onChange={(e) => handlePageChange(e.target.textContent)}
            />
            <p className="records"> {initialRecords} - {lastRecords} of {totalRegisters}</p>
        </div>
    )
}