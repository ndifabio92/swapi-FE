import React from 'react';
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import '../styles/index.css';
import movieImage from '../../../assets/images/movies/a-new-hope.jpg';


export const ListMovies = ({ data }) => {
    return (
        <div className='container-list'>
            {data.results?.map((movie, index) => (
                <section className='container-list' key={index}>
                    <Card className="root" style={{ background: "black" }}>
                        {/* <CardMedia
                        sx={{ height: 140 }}
                        src={movieImage}
                        title="green iguana"
                    />
                    */}
                        <img src={movieImage} />
                        <CardContent>
                            <Typography className="title" color="white">{movie.title}</Typography>
                            <Typography className="description" color="white">
                                {movie.opening_crawl}
                            </Typography>
                        </CardContent>
                    </Card>
                </section>
            ))}
        </div>
    );
};
