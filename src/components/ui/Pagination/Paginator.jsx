import React from "react";
import { Pagination } from "@mui/material";
import { getTotalPages, viewRegisters } from "../../../utils/paginator";

export const Paginator = ({ registers, page, handlePageChange }) => {
    const totalRegisters = registers?.count;
    const totalPages = getTotalPages(registers);
    const { initialRecords, lastRecords } = viewRegisters(registers?.results, page);

    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Pagination
                count={+totalPages}
                color="primary"
                page={page}
                onChange={(e) => handlePageChange(e.target.textContent)}
            />
            <p> {initialRecords} - {lastRecords} of {totalRegisters}</p>
        </div>
    )
}