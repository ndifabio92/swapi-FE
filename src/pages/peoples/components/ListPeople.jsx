import React from "react";
import {Card, CardContent, Typography} from "@mui/material";
import {Paginator} from "../../../components/ui/Pagination/Paginator";

export const ListPeople = ({data,page,setPage}) => {

return (
    <div style={{display: "flex"}}>
        {data.results?.map((people,index) => (
            <Card className="root" key={index}>
                <CardContent>
                    <Typography className="title">{people.name}</Typography>
                    <Typography className="description">
                        {people.eye_color}
                    </Typography>
                </CardContent>
            </Card>
        ))}
    </div>
)
}