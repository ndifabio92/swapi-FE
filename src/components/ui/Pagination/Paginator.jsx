import React from "react";
import {Pagination} from "@mui/material";
import {getTotalPages} from "../../../utils/paginator";

export const Paginator = ({totalPages,page,handlePageChange}) => {
    return (
        <Pagination
            count={totalPages}
            color="primary"
            page={page}
            onChange={(e) => handlePageChange(e.target.textContent)}
        />
    )
}