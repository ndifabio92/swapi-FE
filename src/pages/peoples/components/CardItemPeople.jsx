import React from 'react';
import {Card, CardContent, Typography} from '@mui/material';
import {getImage} from "../../../utils/getImage";
import '../styles/index.css';
import useApiCall from "../../../hooks/useApiCall";
import useApiGetById from "../../../hooks/useApiGetById";

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
                <Typography className="description">
                    <span style={{color: "yellow"}}>HomeWorld</span> {homeworld?.name}
                </Typography>
            </CardContent>
        </Card>
    )
}
