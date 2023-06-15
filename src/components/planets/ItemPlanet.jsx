import React from 'react'
import useApiGetByUrl from '../../hooks/useApiGetByUrl';
import { Typography } from '@mui/material';
import { getImage } from '../../utils/getImage';

import './styles/itemPlanet.css'

const ItemPlanet = ({ url }) => {
    const { data, loading, error } = useApiGetByUrl(url);

    return (
        <>
            {
                loading ||
                <div className='container-planet'>
                    <div className="container-img">
                        <img className="img-people" src={getImage("planets", data.name)} alt={data.name} />
                    </div>
                    <div className='container-planet-description'>
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
                    </div>
                </div>
            }
        </>
    )
}

export default ItemPlanet;