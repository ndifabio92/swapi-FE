import React from "react";
import { Pagination } from "@mui/material";

export const Paginator = ({ totalPages, page, handlePageChange, totalRegisters }) => {
    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Pagination
                count={totalPages}
                color="primary"
                page={page}
                onChange={(e) => handlePageChange(e.target.textContent)}
            />
            <h5>Total de registros: {totalRegisters}</h5>
        </div>
    )
}