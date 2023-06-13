import React, {useState} from 'react';
import './styles/index.css';
import {Paginator} from "../Pagination/Paginator";
import {FormSearch} from "../formSearch/FormSearch";
import {Sort} from "../Sort/Sort";

export const ListComponent = (props) => {
    const {data, CardComponent, page, setPage, query, setQuery} = props;
    const [sortedList, setSortedList] = useState(data?.results);
    return (
        <>
            <FormSearch query={query} setQuery={setQuery}/>
            <Sort data={sortedList ? sortedList : data?.results} setSortedList={setSortedList}/>
            <div className='container-list'>
                {sortedList?.map((item, index) => (
                    <CardComponent item={item} key={index}/>
                ))}
            </div>
            <Paginator registers={data} handlePageChange={setPage} page={+page}/>
        </>

    );
};