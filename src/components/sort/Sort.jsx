import React, {useState} from 'react'
import {Button} from '@mui/material';
import {ArrowDownward, ArrowUpward} from '@mui/icons-material';
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import {sortedList} from '../../utils/sorted';
import './styles/sort.css';

export const Sort = ({data, setSortedData}) => {
    const [ascending, setAscending] = useState(true);
    const name = data[0]?.name ? "name" : "title";
    const toggleSortOrder = () => {
        setAscending(!ascending)
        setSortedData(sortedList([...data], name, ascending));
    }

    return (
        <div className='container-sort'>
            <Button className='btn-sort' variant="outlined" onClick={toggleSortOrder}
                    endIcon={ascending ? <ArrowUpward/> : <ArrowDownward/>}>
                <SortByAlphaIcon/>
            </Button>
        </div>
    )
}
