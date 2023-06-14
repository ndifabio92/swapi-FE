import React, {useState} from 'react';
import {Paginator} from "../pagination/Paginator";
import {FormSearch} from "../formSearch/FormSearch";
import {Sort} from "../sort/Sort";
import useApiCall from "../../hooks/useApiCall";
import {swalAlert} from "../../utils/alert";
import Loader from "../ui/Loader/Loader";
import './styles/listComponent.css';

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
                            {
                                data.count !== 0 && <Sort data={sortedList ? sortedList : data?.results} setSortedList={setSortedList}/>
                            }
                        </div>
                        <div className='container-list'>
                            {register.map((item, index) => (
                                <CardComponent item={item} key={index}/>
                            ))}
                        </div>
                        {
                            data.count !== 0 && <Paginator registers={data} handlePageChange={setPage} page={+page}/>
                        }
                    </>
            }
        </>

    );
};