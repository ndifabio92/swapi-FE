import React from 'react'
import useApiGetByUrl from '../../hooks/useApiGetByUrl';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { getImage } from '../../utils/getImage';

import './styles/itemVehicle.css';
import Loader from "../ui/Loader/Loader";

const ItemVehicle = ({ url }) => {
    const { data, loading, error } = useApiGetByUrl(url);

    return (
        <>
            {
                loading ? <Loader isLoading={loading}/> :
                <Accordion className="acordion">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className="title">{data.name}</Typography>
                    </AccordionSummary>
                    <AccordionDetails className='acordion-vehicle-details'>
                        <div className="container-vehicle-img">
                            <img className="img-vehicle" src={getImage("vehicles", data.name)} alt={data.name} />
                        </div>
                        <div className='container-vehicle-description'>
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
                        </div>
                    </AccordionDetails>
                </Accordion>
            }
        </>
    )
}

export default ItemVehicle;
