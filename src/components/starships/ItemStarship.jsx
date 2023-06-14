import React from 'react'
import { Typography } from '@mui/material';
import useApiGetById from '../../hooks/useApiGetById';

const ItemStarship = ({ url }) => {
    const { data, loading, error } = useApiGetById(url);
    return (
        <>
            <Typography className="title">{data.name}</Typography>
            <Typography className="description">
                <span>Model</span> {data.model}
            </Typography>
            <Typography className="description">
                <span>Manufacturer</span> {data.manufacturer}
            </Typography>
            <Typography className="description">
                <span>Cost in Credits</span> {data.cost_in_credits}
            </Typography>
            <Typography className="description">
                <span>Length</span> {data.length}
            </Typography>
            <Typography className="description">
                <span>Max Atmosphering Speed</span> {data.max_atmosphering_speed}
            </Typography>
            <Typography className="description">
                <span>Crew</span> {data.crew}
            </Typography>
            <Typography className="description">
                <span>Passengers</span> {data.passengers}
            </Typography>
            <Typography className="description">
                <span>Cargo Capacity</span> {data.cargo_capacity}
            </Typography>
            <Typography className="description">
                <span>Consumables</span> {data.consumables}
            </Typography>
            <Typography className="description">
                <span>Hyperdrive Rating</span> {data.hyperdrive_rating}
            </Typography>
            <Typography className="description">
                <span>MGLT</span> {data.MGLT}
            </Typography>
            <Typography className="description">
                <span>Starship Class</span> {data.starship_class}
            </Typography>
            <br />
        </>
    )
}

export default ItemStarship;
