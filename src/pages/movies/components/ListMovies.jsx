import React from 'react';
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import '../styles/index.css';
import { getImage } from '../../../utils/getImage';



export const ListMovies = ({ data }) => {
    return (
        <div className='container-list'>
            {data.results?.map((film, index) => (
                <section className='container-list' key={index}>
                    <Card className="root" style={{ background: "black" }}>
                        <img src={getImage("films", film.title)} />
                        <CardContent>
                            <Typography className="title" color="white">{film.title}</Typography>
                            <Typography className="description" color="white">
                                {film.opening_crawl}
                            </Typography>
                        </CardContent>
                    </Card>
                </section>
            ))}
        </div>
    );
};
