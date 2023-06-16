import React from 'react'
import useApiGetByUrl from '../../hooks/useApiGetByUrl';
import {Accordion, AccordionDetails, AccordionSummary, Typography} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {getImage} from '../../utils/getImage';

import './styles/itemMovie.css';
import Loader from "../ui/Loader/Loader";
import {swalAlert} from "../../utils/alert";

const ItemMovie = ({url}) => {
    const {data, loading, error} = useApiGetByUrl(url);
    if (error) swalAlert('error', 'Error', 'The API call attempt failed.');
    if (data.count === 0) swalAlert('info', 'Info', 'Not Found');
    return (
        <>
            {
                loading ? <Loader isLoading={loading}/> :
                    <Accordion className="acordion">
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className="title">{data.title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails className='acordion-details'>
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
                        </AccordionDetails>
                    </Accordion>

            }
        </>
    )
}

export default ItemMovie
