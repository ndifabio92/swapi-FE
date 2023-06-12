import React from 'react'
import { Button } from '@mui/material';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import './styles/index.css';

export const Sort = ({ ascending, setAscending }) => {

    const toggleSortOrder = () => setAscending(!ascending);

    return (
        <div className='container-sort'>
            <Button className='btn-sort' variant="contained" onClick={toggleSortOrder} endIcon={ascending ? <ArrowDownward /> : <ArrowUpward />}>
                Sort
            </Button>
        </div>
    )
}
