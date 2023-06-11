import React, { useState } from 'react';

import { Button, Card, CardContent, Typography } from '@mui/material';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import { Sort } from '../../../components/ui/Sort/Sort';

export const ListPeople = ({ data }) => {
    const [ascending, setAscending] = useState(true);
    const sortedResults = [...data.results];

    sortedResults.sort((a, b) => {
        if (ascending) return a.name.localeCompare(b.name);
        return b.name.localeCompare(a.name);

    });

    const toggleSortOrder = () => {
        setAscending(!ascending);
    };

    return (
        <div>
            <Sort data={data} ascending={ascending} setAscending={setAscending} />
            <div style={{ display: 'flex' }}>
                {sortedResults.map((people, index) => (
                    <Card className="root" key={index}>
                        <CardContent>
                            <Typography className="title">{people.name}</Typography>
                            <Typography className="description">{people.eye_color}</Typography>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};
