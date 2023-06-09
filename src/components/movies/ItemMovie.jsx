import React from 'react'
import useApiGetByUrl from '../../hooks/useApiGetByUrl';
import {Typography} from '@mui/material';
import {getImage} from '../../utils/getImage';
import Loader from "../ui/Loader/Loader";
import {swalAlert} from "../../utils/alert";

import './styles/itemMovie.css';

const ItemMovie = ({url}) => {
    const {data, loading, error} = useApiGetByUrl(url);
    if (error) swalAlert('error', 'Error', 'The API call attempt failed.');

    return (
        <>
            {
                loading ? <Loader isLoading={loading}/> :
                    <div className="container-item-movie">
                        <div className='container-img-description'>
                            <img className="img-card" src={getImage("films", data.title)} alt={data.name}/>
                            <>
                                <Typography className="description">
                                    <span>Release Date</span> {data.release_date}
                                </Typography>
                                <Typography className="description">
                                    <span>Director</span> {data.director}
                                </Typography>
                                <Typography className="description">
                                    <span>Producers</span> {data.producer}
                                </Typography>
                            </>
                        </div>
                        <div className='container-opening'>
                            <Typography className="description">
                                {data.opening_crawl}
                            </Typography>
                        </div>
                    </div>
            }
        </>
    )
}

export default ItemMovie
