import { Typography } from '@mui/material'
import React from 'react'
import { getImage } from '../../utils/getImage'

import './styles/itemCharacter.css';

const ItemCharacter = ({ item }) => {
    return (
        <div className='container-character'>
            <div className="container-img">
                <img className="img-card" src={getImage("characters", item.name)} alt={item.name} />
            </div>
            <div className='container-character-description'>
                <Typography className="description">
                    <span>Birth Year</span>{item.birth_year}
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
            </div>
        </div>
    )
}
export default ItemCharacter;