import React, {useEffect, useState} from 'react';
import {Paginator} from "../Pagination/Paginator";
import {FormSearch} from "../formSearch/FormSearch";
import {Sort} from "../Sort/Sort";
import useApiCall from "../../hooks/useApiCall";
import {swalAlert} from "../../utils/alert";
import Loader from "../ui/Loader/Loader";
import './styles/index.css';

export const ListComponent = ({CardComponent, resource}) => {

    const [page, setPage] = useState("1");
    const [query, setQuery] = useState("");
    const {data, loading, error} = useApiCall(resource, page, query);
    const [sortedList, setSortedList] = useState(data?.results);

    if (error) swalAlert('error', 'Error', 'The API call attempt failed.');

    const register = sortedList ? sortedList : data?.results;
    return (
        <>
            {
                loading ? <Loader isLoading={loading}/>
                    :
                    <>
                        <div className="container-header">
                            <FormSearch query={query} setQuery={setQuery}/>
                            <Sort data={sortedList ? sortedList : data?.results} setSortedList={setSortedList}/>
                        </div>
                        <div className='container-list'>
                            {register.map((item, index) => (
                                <CardComponent item={item} key={index}/>
                            ))}
                        </div>
                        <Paginator registers={data} handlePageChange={setPage} page={+page}/>
                    </>
            }
        </>

    );
};