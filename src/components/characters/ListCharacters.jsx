import React from 'react';

// import '../styles/cards.css';
// import '../styles/img.css';
// import './styles/itemCharacter.css';
import useApiGetAllUrls from "../../hooks/useApiGetAllUrls";
import {CardItemCharacter} from "./CardItemCharacter";
import Loader from "../ui/Loader/Loader";
import useApiCall from "../../hooks/useApiCall";

import '../styles/cards.css';
import '../styles/img.css';
import './styles/itemCharacter.css';
const ListCharacters = ({ urls }) => {
    const {data, loading, error} = useApiGetAllUrls(urls);
    const array = Object.values(data).map((item) => {
        const {edited, films, pilots, created, ...rest} = item;
        return rest;
    });

    // const id = item.url.split("/")[5];

    return (
        <>
            {
                loading ? <Loader isLoading={loading}/> :
                    array.map((item, index) => (
                        <CardItemCharacter item={item} key={index}/>
                    ))
            }
        </>
    )
}
export default ListCharacters