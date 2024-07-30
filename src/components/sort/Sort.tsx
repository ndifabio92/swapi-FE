// import { useState } from 'react'
// import { Button } from '@mui/material';
// import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
// import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
// import { sortedList } from '../../shared/sorted';
// import './styles/sort.css';
// import { People } from '../../interfaces/People';
// import { Films } from '../../interfaces/Films';

// interface SortProps<T> {
//     data: T[];
//     setSortedData: (sortedData: T[]) => void;
//     isFilm: boolean
// }

// export const Sort = <T extends People | Films>({ data, setSortedData }: SortProps<T>) => {
//     const [ascending, setAscending] = useState(true);
//     const name = isFilm ? "name" : "title";
//     const toggleSortOrder = () => {
//         setAscending(!ascending)
//         setSortedData(sortedList([...data], name, ascending));
//     }

//     return (
//         <div className='container-sort'>
//             <Button className='btn-sort' variant="outlined" onClick={toggleSortOrder}
//                 endIcon={ascending ? <ArrowUpward /> : <ArrowDownward />}>
//                 <SortByAlphaIcon />
//             </Button>
//         </div>
//     )
// }
