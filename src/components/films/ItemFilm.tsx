import useApiGetByUrl from '../../hooks/useApiGetByUrl';
import { Typography } from '@mui/material';
import { getImage } from '../../shared/getImage';
import Loader from "../ui/Loader/Loader";
import { swalAlert } from "../../shared/alerts";

import './styles/itemFilm.css';
import { Result } from '../../interfaces/Films';

interface Props {
    url: string
}

const ItemFilm = ({ url }: Props) => {
    const { data, loading, error } = useApiGetByUrl<Result>(url);
    if (error) swalAlert({ icon: 'error', title: 'Error', text: 'The API call attempt failed.' });

    return (
        <>
            {
                loading ? <Loader isLoading={loading} /> :
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
                        <div className='container-opening'>
                            <Typography className="description">
                                {data?.opening_crawl}
                            </Typography>
                        </div>
                    </div>
            }
        </>
    )
}

export default ItemFilm
