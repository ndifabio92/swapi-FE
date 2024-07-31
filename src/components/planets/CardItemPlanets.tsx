import { Card, CardContent, Typography } from '@mui/material';
import { getImage } from "../../shared/getImage";
import { Planet } from '../../interfaces/Planet';

import '../styles/cards.css';
import '../styles/img.css';

export const CardItemPlanets = ({ item }: { item: Planet }) => {
    return (
        <Card className="root card">
            <div className="container-img">
                <img className="img-card" src={getImage({ resource: "planets", title: item.name })} alt={item.name} />
            </div>
            <CardContent>
                <Typography className="title">{item.name}</Typography>
                <br />
                <div className="container-info">
                    <Typography className="description">
                        <span>Rotation Period</span> {item.rotation_period}
                    </Typography>
                    <Typography className="description">
                        <span>Orbital Period</span> {item.orbital_period}
                    </Typography>
                    <Typography className="description">
                        <span>Diameter</span> {item.diameter}
                    </Typography>
                    <Typography className="description">
                        <span>Climate</span> {item.climate}
                    </Typography>
                    <Typography className="description">
                        <span>Gravity</span> {item.gravity}
                    </Typography>
                    <Typography className="description">
                        <span>Terrain</span> {item.terrain}
                    </Typography>
                    <Typography className="description">
                        <span>Water</span> {item.surface_water}
                    </Typography>
                    <Typography className="description">
                        <span>Population</span> {item.population}
                    </Typography>
                </div>
            </CardContent>
        </Card>
    )
}
