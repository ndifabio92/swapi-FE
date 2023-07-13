import React from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {Button, Card, CardContent, Typography} from "@mui/material";
import {getImage} from '../../shared/getImage';
import '../styles/cards.css';
import '../styles/img.css';

export const CardItemMovies = ({item}) => {
    const id = item?.url?.split("/")[5];
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
            <Button className="btn-character" variant="outlined">
                <Link className="link-character" to={`/films/${id}`}>
                    Read More...
                </Link>
            </Button>
        </Card>

    );
};

CardItemMovies.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        opening_crawl: PropTypes.string.isRequired,
        director: PropTypes.string.isRequired,
        producer: PropTypes.string.isRequired,
        release_date: PropTypes.string.isRequired,
        characters: PropTypes.arrayOf(PropTypes.string).isRequired,
        planets: PropTypes.arrayOf(PropTypes.string).isRequired,
        starships: PropTypes.arrayOf(PropTypes.string).isRequired,
        vehicles: PropTypes.arrayOf(PropTypes.string).isRequired,
        species: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
}
