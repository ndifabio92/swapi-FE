import { Card, CardContent, Typography } from '@mui/material';
import { getImage } from "../../shared/getImage";
import { Vehicle } from '../../interfaces/Vehicle';

import '../styles/cards.css';
import '../styles/img.css';
import { ResourceType } from '../types/ResourceType';


export const CardItemVehicles = ({ item }: { item: Vehicle }) => {
    return (
        <Card className="root card">
            <div className="container-img">
                <img className="img-card" src={getImage({ resource: ResourceType.Vehicles, title: item.name })} alt={item.name} />
            </div>
            <CardContent>
                <Typography className="title">{item.name}</Typography>
                <br />
                <div className="container-info">
                    <Typography className="description">
                        <span>Model</span> {item.model}
                    </Typography>
                    <Typography className="description">
                        <span>Manufacturerd</span> {item.manufacturer}
                    </Typography>
                    <Typography className="description">
                        <span>Cost In Credits</span> {item.cost_in_credits}
                    </Typography>
                    <Typography className="description">
                        <span>Length</span> {item.length}
                    </Typography>
                    <Typography className="description">
                        <span>Max Atmosphering Speed</span> {item.max_atmosphering_speed}
                    </Typography>
                    <Typography className="description">
                        <span>Crew</span> {item.crew}
                    </Typography>
                    <Typography className="description">
                        <span>Passengers</span> {item.passengers}
                    </Typography>
                    <Typography className="description">
                        <span>Cargo Capacity</span> {item.cargo_capacity}
                    </Typography>
                    <Typography className="description">
                        <span>Consumables</span> {item.consumables}
                    </Typography>
                    <Typography className="description">
                        <span>Vehicle Class</span> {item.vehicle_class}
                    </Typography>
                </div>
            </CardContent>
        </Card>
    )
}
