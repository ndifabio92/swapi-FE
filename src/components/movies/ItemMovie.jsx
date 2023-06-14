import React from 'react'
import useApiGetById from '../../hooks/useApiGetById';
import { Typography } from '@mui/material';

const ItemMovie = ({ url }) => {
    const { data, loading, error } = useApiGetById(url);
    return (
        <>
            <Typography className="title">{data.title}</Typography>
            <Typography className="title">
                {data.release_date}
            </Typography>
            <br />
            <Typography className="description">
                <span>Director</span> {data.director}
            </Typography>
            <Typography className="description">
                <span>Producers</span> {data.producer}
            </Typography>
            <br />
            <Typography className="description">
                {data.opening_crawl}
            </Typography>
        </>
    )
}

export default ItemMovie
