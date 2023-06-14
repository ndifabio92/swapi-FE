import React from 'react'
import { Typography } from '@mui/material';
import useApiGetById from '../../hooks/useApiGetById';

const ItemVehicle = ({ url }) => {
    const { data, loading, error } = useApiGetById(url);
    return (
        <>
            <Typography className="title">{data.name}</Typography>
            <Typography className="description">
                <span>Model</span> {data.model}
            </Typography>
            <Typography className="description">
                <span>Manufacturerd</span> {data.manufacturer}
            </Typography>
            <Typography className="description">
                <span>Cost In Credits</span> {data.cost_in_credits}
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
                <span>Vehicle Class</span> {data.vehicle_class}
            </Typography>
        </>
    )
}

export default ItemVehicle;
