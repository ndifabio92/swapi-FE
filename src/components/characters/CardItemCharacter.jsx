import React from 'react';
import {Link, NavLink, useLocation} from 'react-router-dom';
import { Button, Card, CardContent, Typography } from '@mui/material';
import { getImage } from "../../utils/getImage";

import '../styles/cards.css';
import '../styles/img.css';
import './styles/itemCharacter.css';

const CardItemCharacter = ({ item }) => {
    const id = item.url.split("/")[5];
    return (
        <Card className="root card">
            <div className="container-img">
                <img className="img-card" src={getImage("characters", item.name)} alt={item.name} />
            </div>
            <CardContent>
                <Typography className="title">{item.name}</Typography>
                <br />
                <Typography className="description">
                    <span>birth_year</span> {item.birth_year}
                </Typography>
                <Typography className="description">
                    <span>Height</span> {item.height}
                </Typography>
                <Typography className="description">
                    <span>Mass</span> {item.mass}
                </Typography>
                <Typography className="description">
                    <span>Hair Color</span> {item.hair_color}
                </Typography>
                <Typography className="description">
                    <span>Skin Color</span> {item.skin_color}
                </Typography>
                <Typography className="description">
                    <span>Eye Color</span> {item.eye_color}
                </Typography>
                <Typography className="description">
                    <span>Gender</span> {item.gender}
                </Typography>
            </CardContent>
            <Button className="btn-character" variant="outlined">
                <NavLink className="link-character" to={`/characters/${id}`}>
                    Read More...
                </NavLink>
            </Button>
        </Card>
    )
}
export default CardItemCharacter;
