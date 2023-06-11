import React from 'react'
import { Button, Card, CardContent, Typography } from '@mui/material';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';

export const Sort = ({ data, ascending, setAscending }) => {
    const sortedResults = [...data.results];

    sortedResults.sort((a, b) => {
        const nameOrTitleA = a.name ? a.name : a.title
        const nameOrTitleB = b.name ? b.name : b.title;

        if (ascending) return nameOrTitleA.localeCompare(nameOrTitleB);
        return nameOrTitleB.localeCompare(nameOrTitleA);

    });

    const toggleSortOrder = () => {
        setAscending(!ascending);
    };
    return (
        <div style={{ marginTop: "10px", textAlign: 'end' }}>
            <Button variant="contained" onClick={toggleSortOrder} endIcon={ascending ? <ArrowDownward /> : <ArrowUpward />}>
                Sort
            </Button>
        </div>
    )
}
