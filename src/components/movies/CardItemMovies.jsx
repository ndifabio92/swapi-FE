import React from 'react';
import {Card, CardContent, Typography} from "@mui/material";
import {getImage} from '../../utils/getImage';
import '../styles/cards.css';
import '../styles/img.css';


export const CardItemMovies = ({item}) => {
    return (
        <Card className="root card">
            <div className="container-img">
                <img className="img-card" src={getImage("films", item.title)} alt={item.name}/>
            </div>
            <CardContent>
                <Typography className="title">{item.title}</Typography>
                <Typography className="title">
                    {item.release_date}
                </Typography>
                <br/>
                <Typography className="description">
                    <span>Director</span> {item.director}
                </Typography>
                <Typography className="description">
                    <span>Producers</span> {item.producer}
                </Typography>
                <br/>
                <Typography className="description">
                    {item.opening_crawl}
                </Typography>
            </CardContent>
        </Card>
    );
};
