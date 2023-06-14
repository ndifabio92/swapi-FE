import { Typography } from '@mui/material';
import React from 'react'
import useApiGetById from '../../hooks/useApiGetById';


const ItemPlanet = ({ url }) => {
    const { data, loading, error } = useApiGetById(url);

    return (
        <>
            <Typography className="title">{data.name}</Typography>
            <Typography className="description">
                <span>Rotation Period</span> {data.rotation_period}
            </Typography>
            <Typography className="description">
                <span>Orbital Period</span> {data.orbital_period}
            </Typography>
            <Typography className="description">
                <span>Diameter</span> {data.diameter}
            </Typography>
            <Typography className="description">
                <span>Climate</span> {data.climate}
            </Typography>
            <Typography className="description">
                <span>Gravity</span> {data.gravity}
            </Typography>
            <Typography className="description">
                <span>Terrain</span> {data.terrain}
            </Typography>
            <Typography className="description">
                <span>Water</span> {data.surface_water}
            </Typography>
            <Typography className="description">
                <span>Population</span> {data.population}
            </Typography>
        </>
    )
}

export default ItemPlanet;