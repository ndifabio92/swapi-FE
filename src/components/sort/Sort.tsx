import { useState } from 'react'
import { Button } from '@mui/material';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import { sortedList } from '../../shared/sorted';
import { Character } from '../../interfaces/Character';
import { Film } from '../../interfaces/Film';
import './styles/sort.css';

interface SortProps<T> {
    data: T[];
    setSortedData: (sortedData: T[]) => void;
    isFilm: boolean
}

export const Sort = <T extends Character | Film>({ data, setSortedData, isFilm }: SortProps<T>) => {
    const [ascending, setAscending] = useState(true);
    const name: keyof T = isFilm ? "name" as keyof T : "title" as keyof T;
    const toggleSortOrder = () => {
        setAscending(!ascending)
        setSortedData(sortedList({ data: [...data], sortField: name, ascending: ascending }));
    }

    return (
        <div className='container-sort'>
            <Button className='btn-sort' variant="outlined" onClick={toggleSortOrder}
                endIcon={ascending ? <ArrowUpward /> : <ArrowDownward />}>
                <SortByAlphaIcon />
            </Button>
        </div>
    )
}
