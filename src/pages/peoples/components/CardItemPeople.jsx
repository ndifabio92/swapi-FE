import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import '../styles/index.css';

export const CardItemPeople = ({ item, index }) => {
    return (
        <section>
            <Card className="root card">
                <CardContent style={{ width: "350px" }}>
                    <Typography className="title">{item.name}</Typography>
                    <Typography className="description">{item.eye_color}</Typography>
                </CardContent>
            </Card>
        </section>
    )
}
