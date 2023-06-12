import React from 'react'
import { Button } from '@mui/material';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';

export const Sort = ({ ascending, setAscending }) => {

    const toggleSortOrder = () => setAscending(!ascending);

    return (
        // <div style={{ marginTop: "10px", textAlign: 'end' }}>
        <div>
            <Button variant="contained" onClick={toggleSortOrder} endIcon={ascending ? <ArrowDownward /> : <ArrowUpward />}>
                Sort
            </Button>
        </div>
    )
}
