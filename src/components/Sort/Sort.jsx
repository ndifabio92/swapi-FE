import React, {useState} from 'react'
import {Button} from '@mui/material';
import {ArrowDownward, ArrowUpward} from '@mui/icons-material';
import {sortedList} from '../../utils/sorted';
import './styles/index.css';

export const Sort = ({data, setSortedList}) => {
    const [ascending, setAscending] = useState(true);
    const name = data[0].name ? "name" : "title";
    const toggleSortOrder = () => {
        setAscending(!ascending)
        setSortedList(sortedList([...data], name, ascending));
    }

    return (
        <div className='container-sort'>
            <Button className='btn-sort' variant="contained" onClick={toggleSortOrder}
                    endIcon={ascending ? <ArrowDownward/> : <ArrowUpward/>}>
                Sort
            </Button>
        </div>
    )
}
