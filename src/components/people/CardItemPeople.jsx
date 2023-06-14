import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography } from '@mui/material';
import { getImage } from "../../utils/getImage";

import '../styles/cards.css';
import '../styles/img.css';

export const CardItemPeople = ({ item }) => {
    const id = item.url.split("/")[5];

    return (
        <Card className="root card">
            <div className="container-img">
                <img className="img-people" src={getImage("people", item.name)} alt={item.name} />
            </div>
            <CardContent>
                <Typography className="title">{item.name}</Typography>
                <Typography className="title">
                    {item.birth_year}
                </Typography>
                <br />
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
            <Link to={`/people/${id}`} state={{ item }} >
                More...
            </Link>
        </Card>
    )
}
