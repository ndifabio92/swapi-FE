import React from 'react';
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import '../styles/index.css';
import { getImage } from '../../../utils/getImage';



export const ListMovies = ({ data }) => {
    return (
        <div className='container-list'>
            {data.results?.map((film, index) => (
                <section className='container-list' key={index}>
                    <Card className="root">
                        <img src={getImage("films", film.title)} />
                        <CardContent>
                            <Typography className="title">{film.title}</Typography>
                            <Typography className="title">
                                {film.release_date}
                            </Typography>
                            <br />
                            <Typography className="description">
                                <span style={{ color: "yellow" }}>Director</span> {film.director}
                            </Typography>
                            <Typography className="description">
                                <span style={{ color: "yellow" }}>Producers</span> {film.producer}
                            </Typography>
                            <br />
                            <Typography className="description">
                                {film.opening_crawl}
                            </Typography>
                        </CardContent>
                    </Card>
                </section>
            ))}
        </div>
    );
};
