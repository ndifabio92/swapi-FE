import React, {useState} from 'react';
import {Paginator} from "../pagination/Paginator";
import {FormSearch} from "../formSearch/FormSearch";
import {Sort} from "../sort/Sort";
import useApiCall from "../../hooks/useApiCall";
import {swalAlert} from "../../shared/alert";
import Loader from "../ui/Loader/Loader";
import './styles/listComponent.css';
import PropTypes from "prop-types";
import {sortedList} from "../../shared/sorted";

export const ListComponent = ({CardComponent, resource}) => {
    const [page, setPage] = useState("1");
    const [query, setQuery] = useState("");
    const {data, loading, error} = useApiCall(resource, page, query);
    const dataSorted = sortedList(data?.results,(resource==="films" ? "title" : "name"), false);
    const [sortedData, setSortedData] = useState(dataSorted);

    if (error) swalAlert('error', 'Error', 'The API call attempt failed.');

    const register = sortedData ? sortedData : dataSorted;
    return (
        <>
            {
                loading ? <Loader isLoading={loading}/>
                    :
                    <>
                        <div className="container-header">
                            <FormSearch query={query} setQuery={setQuery}/>
                            {
                                data.count !== 0 && <Sort data={sortedData ? sortedData : dataSorted} setSortedData={setSortedData}/>
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

ListComponent.propTypes = {
    resource: PropTypes.string.isRequired,
    CardComponent: PropTypes.elementType.isRequired,
};