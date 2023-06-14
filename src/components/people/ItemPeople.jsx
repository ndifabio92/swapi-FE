import { Typography } from '@mui/material'
import React from 'react'
import { getImage } from '../../utils/getImage'

export const ItemPeople = ({ item }) => {
    return (

        <div>
            <img className="img-people" src={getImage("people", item.name)} alt={item.name} />
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
        </div>
    )
}
