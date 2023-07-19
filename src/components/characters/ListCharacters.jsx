import React, {lazy, Suspense} from "react";
import useApiGetAllUrlsFor from "../../hooks/useApiGetAllUrlsFor";
import Loader from "../ui/Loader/Loader";
import {sortedList} from "../../shared/sorted";
import {swalAlert} from "../../shared/alert";
import PropTypes from "prop-types";

const CardItemCharacter = lazy(() => import('./CardItemCharacter'))
const ListCharacters = ({urls}) => {
    const {data, loading, error} = useApiGetAllUrlsFor(urls);
    const dataSorted = sortedList(data, ("name"), false);

    if (error) swalAlert('error', 'Error', 'The API call attempt failed.');
    return (
        <>
            {
                loading ? <Loader isLoading={loading}/> :
                    <div className='container-list'>
                        {
                            dataSorted?.map((item, index) => (
                                <Suspense key={index}>
                                    <CardItemCharacter item={item} key={index}/>
                                </Suspense>
                            ))
                        }
                    </div>
            }
        </>
    )
}

export default ListCharacters;

ListCharacters.prototype = {
    urls: PropTypes.arrayOf(PropTypes.string).isRequired
}