import useApiGetByUrl from '../../hooks/useApiGetByUrl';
import { Typography } from '@mui/material';
import { getImage } from '../../shared/getImage';
import { swalAlert } from "../../shared/alerts";
import { Planet } from '../../interfaces/Planet';

import './styles/itemPlanet.css'
import { ResourceType } from '../types/ResourceType';

const ItemPlanet = ({ url }: { url: string | undefined }) => {

    const { data, error } = useApiGetByUrl<Planet>(url);
    if (error) swalAlert({ icon: 'error', title: 'Error', text: 'The API call attempt failed.' });
    return (
        <div className='container-planet'>
            <div className="container-img">
                <img className="img-card" src={getImage({ resource: ResourceType.Planets, title: data?.name })} alt={data?.name} />
            </div>
            <div className='container-planet-description'>
                <Typography className="title">{data?.name}</Typography>
                <Typography className="description">
                    <span>Rotation Period</span> {data?.rotation_period}
                </Typography>
                <Typography className="description">
                    <span>Orbital Period</span> {data?.orbital_period}
                </Typography>
                <Typography className="description">
                    <span>Diameter</span> {data?.diameter}
                </Typography>
                <Typography className="description">
                    <span>Climate</span> {data?.climate}
                </Typography>
                <Typography className="description">
                    <span>Gravity</span> {data?.gravity}
                </Typography>
                <Typography className="description">
                    <span>Terrain</span> {data?.terrain}
                </Typography>
                <Typography className="description">
                    <span>Water</span> {data?.surface_water}
                </Typography>
                <Typography className="description">
                    <span>Population</span> {data?.population}
                </Typography>
            </div>
        </div>
    )
}

export default ItemPlanet;