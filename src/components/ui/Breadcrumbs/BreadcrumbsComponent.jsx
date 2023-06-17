import React from 'react';
import {Breadcrumbs, Link, Typography} from "@mui/material";
import {useLocation} from "react-router-dom";

const BreadcrumbsComponent = ({name}) => {

    const location = useLocation();
    const handleClickBack = () => {
        // const pathToBack = location.state?.pathToBack ? location.state?.pathToBack : location.pathname.split('/')[1];
        console.log(location.state?.pathToBack)
        navigate(location.state?.pathToBack);
    }
    const nameBack = location.state?.pathToBack === '/' ? "FILMS" : location.state?.pathToBack.split('/')[1].concat('s').toUpperCase();
    return (
        <Breadcrumbs separator=">" aria-label="breadcrumb" style={{ color: "white" }}>
            <Link style={{ color: "white", cursor: "pointer" }} underline="none" >
                a
            </Link>
            <Typography color="text.primary">
                <span>{name}</span>
            </Typography>
        </Breadcrumbs>
    )
}



export default BreadcrumbsComponent;