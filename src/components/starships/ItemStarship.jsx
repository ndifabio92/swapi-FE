import React from 'react'
import useApiGetByUrl from '../../hooks/useApiGetByUrl';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { getImage } from '../../utils/getImage';

import './styles/itemStarship.css';
import Loader from "../ui/Loader/Loader";

const ItemStarship = ({ url }) => {
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
                    <AccordionDetails className='acordion-starship-details'>
                        <div className="container-starship-img">
                            <img className="img-starship" src={getImage("starships", data.name)} alt={data.name} />
                        </div>
                        <div className='container-starship-description'>
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
                        </div>
                    </AccordionDetails>
                </Accordion>
            }
        </>
    )
}

export default ItemStarship;
