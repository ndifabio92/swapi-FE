import useApiGetByUrl from '../../hooks/useApiGetByUrl';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { getImage } from '../../shared/getImage';
import Loader from "../ui/Loader/Loader";
import { swalAlert } from "../../shared/alerts";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Result } from '../../interfaces/Film';
import './styles/itemFilm.css';

interface Props {
    url: string
}

const ItemFilmCharacter = ({ url }: Props) => {
    const { data, loading, error } = useApiGetByUrl<Result>(url);
    if (error) swalAlert({ icon: 'error', title: 'Error', text: 'The API call attempt failed.' });

    return (
        <>
            {
                loading ? <Loader isLoading={loading} /> :

                    <Accordion className="acordion">
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className="title">{data?.title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="container-item-movie">
                                <div className='container-img-description'>
                                    <img className="img-card" src={getImage({ resource: "films", title: data?.title })} alt={data?.title} />
                                    <>
                                        <Typography className="description">
                                            <span>Release Date</span> {data?.release_date}
                                        </Typography>
                                        <Typography className="description">
                                            <span>Director</span> {data?.director}
                                        </Typography>
                                        <Typography className="description">
                                            <span>Producers</span> {data?.producer}
                                        </Typography>
                                    </>
                                </div>
                            </div>
                            <div className='container-opening'>
                                <Typography className="description">
                                    {data?.opening_crawl}
                                </Typography>
                            </div>
                        </AccordionDetails>
                    </Accordion>

            }
        </>
    )
}

export default ItemFilmCharacter
