import React from 'react';
import {Card, CardContent, Skeleton, Typography} from '@mui/material';
import {getImage} from "../../utils/getImage";
import useApiGetById from "../../hooks/useApiGetById";

import '../styles/cards.css';
import '../styles/img.css';

export const CardItemPeople = ({item}) => {
    const {data: homeworld, loading, error} = useApiGetById(item.homeworld);

    return (
        <Card className="root card">
            <img className="img-people" src={getImage("people", item.name)} alt={item.name}/>
            <CardContent>
                <Typography className="title">{item.name}</Typography>
                <Typography className="title">
                    {item.birth_year}
                </Typography>
                <br/>
                <div>
                    <Typography className="description">
                        <span style={{color: "yellow"}}>HomeWorld</span>
                        {
                            loading ? <Skeleton className="placeholder-animation" height={10} width="50%"/>
                                : homeworld?.name
                        }
                    </Typography>
                    <Typography className="description">
                        <span style={{color: "yellow"}}>Height</span> {item.height}
                    </Typography>
                    <Typography className="description">
                        <span style={{color: "yellow"}}>Mass</span> {item.mass}
                    </Typography>
                    <Typography className="description">
                        <span style={{color: "yellow"}}>Hair Color</span> {item.hair_color}
                    </Typography>
                    <Typography className="description">
                        <span style={{color: "yellow"}}>Skin Color</span> {item.skin_color}
                    </Typography>
                    <Typography className="description">
                        <span style={{color: "yellow"}}>Eye Color</span> {item.eye_color}
                    </Typography>
                    <Typography className="description">
                        <span style={{color: "yellow"}}>Gender</span> {item.gender}
                    </Typography>
                </div>
            </CardContent>
        </Card>
    )
}
