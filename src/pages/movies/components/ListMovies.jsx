import React from 'react';
import {Card, CardContent, Typography} from "@mui/material";
import '../styles/index.css';
import {Link} from "react-router-dom";
export const ListMovies = ({data}) => {
    return (
        <div>
            {data.results?.map((movie,index) => (
                <Card className="root" key={index+1}>
                    <CardContent>
                        <Typography className="title">{movie.title}</Typography>
                        <Typography className="description">
                            {movie.opening_crawl}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};
