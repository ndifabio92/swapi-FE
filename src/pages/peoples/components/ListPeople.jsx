import React, { useState } from 'react';

import { Card, CardContent, Typography } from '@mui/material';
import { Sort } from '../../../components/ui/Sort/Sort';
import { sortedList } from '../../../utils/sorted';
import '../styles/index.css';

export const ListPeople = ({ data }) => {
    const [ascending, setAscending] = useState(true);
    const sortedResults = sortedList(data, "name", ascending);

    return (
        <div>
            <Sort ascending={ascending} setAscending={setAscending} />
            <div className="container">
                {sortedResults?.map((people, index) => (
                    <section className='container-list' key={index}>
                        <Card className="root" key={index}>
                            <CardContent style={{ width: "350px" }}>
                                <Typography className="title">{people.name}</Typography>
                                <Typography className="description">{people.eye_color}</Typography>
                            </CardContent>
                        </Card>
                    </section>
                ))}
            </div>
        </div>
    );
};
