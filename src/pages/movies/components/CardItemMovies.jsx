import React from 'react';
import {Card, CardContent, Typography} from "@mui/material";
import {getImage} from '../../../utils/getImage';
import '../styles/index.css';


export const CardItemMovies = ({item}) => {
    return (
        <Card className="root card">
            <img className="img-films" src={getImage("films", item.title)} alt={item.title}/>
            <CardContent>
                <Typography className="title">{item.title}</Typography>
                <Typography className="title">
                    {item.release_date}
                </Typography>
                <br/>
                <Typography className="description">
                    <span style={{color: "yellow"}}>Director</span> {item.director}
                </Typography>
                <Typography className="description">
                    <span style={{color: "yellow"}}>Producers</span> {item.producer}
                </Typography>
                <br/>
                <Typography className="description">
                    {item.opening_crawl}
                </Typography>
            </CardContent>
        </Card>
    );
};
