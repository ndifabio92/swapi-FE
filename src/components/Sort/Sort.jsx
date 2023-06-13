import React, { useState } from 'react'
import { Button } from '@mui/material';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import './styles/index.css';
import { sortedList } from '../../../utils/sorted';

export const Sort = ({ data, setSortedList }) => {
    const [ascending, setAscending] = useState(true);

    const toggleSortOrder = () => {
        setAscending(!ascending)
        setSortedList(sortedList([...data], "name", ascending));
    }

    return (
        <div className='container-sort'>
            <Button className='btn-sort' variant="contained" onClick={toggleSortOrder} endIcon={ascending ? <ArrowDownward /> : <ArrowUpward />}>
                Sort
            </Button>
        </div>
    )
}
