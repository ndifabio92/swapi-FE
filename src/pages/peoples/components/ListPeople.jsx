import React, { useState } from 'react';

import { Card, CardContent, Typography } from '@mui/material';
import { Sort } from '../../../components/ui/Sort/Sort';
import { sortedList } from '../../../utils/sorted';

export const ListPeople = ({ data }) => {
    const [ascending, setAscending] = useState(true);
    const sortedResults = sortedList(data, "name", ascending);

    return (
        <div>
            <Sort ascending={ascending} setAscending={setAscending} />
            <div style={{ display: 'flex' }}>
                {sortedResults?.map((people, index) => (
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
