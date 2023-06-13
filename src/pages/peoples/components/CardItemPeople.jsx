import React from 'react';
import {Card, CardContent, Skeleton, Typography} from '@mui/material';
import {getImage} from "../../../utils/getImage";
import '../styles/index.css';
import useApiGetById from "../../../hooks/useApiGetById";

export const CardItemPeople = ({item}) => {
    const {data: homeworld, loading, error} = useApiGetById(item.homeworld);

    return (
        <Card className="root card">
            <img className="img-people" src={getImage("people", item.name)} alt={item.name}/>
            <CardContent style={{width: "350px"}}>
                <Typography className="title">{item.name}</Typography>
                <Typography className="title">
                    {item.birth_year}
                </Typography>
                <br/>
                <Typography className="description">
                    <span style={{color: "yellow"}}>HomeWorld</span>
                    {
                        loading ? <Skeleton className="placeholder-animation" height={10} width="50%"/> :
                            homeworld?.name}
                </Typography>
            </CardContent>
        </Card>
    )
}
