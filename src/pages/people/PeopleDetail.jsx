import React, { Suspense, lazy } from "react";
import { Breadcrumbs, Typography } from "@mui/material";
import { useParams, useLocation, Link } from 'react-router-dom';
import { ItemPeople } from "../../components/people/ItemPeople";

const ItemMovie = lazy(() => import('../../components/movies/ItemMovie'));
const ItemPlanet = lazy(() => import('../../components/planets/ItemPlanet'));
const ItemStarship = lazy(() => import('../../components/starships/ItemStarship'));
const ItemVehicle = lazy(() => import('../../components/vehicles/ItemVehicle'));

const PeopleDetail = () => {
    const { id } = useParams();
    const location = useLocation();
    const { item } = location.state;

    return (
        <div>
            <div>
                <Breadcrumbs aria-label="breadcrumb" style={{ color: "white" }}>
                    <Link to="/people" style={{ color: "white" }}>
                        PEOPLE
                    </Link>
                    <Typography color="text.primary">
                        <span>{item.name.toUpperCase()}</span>
                    </Typography>
                </Breadcrumbs>
            </div>
            <div>
                <ItemPeople item={item} />
            </div>
            <div>
                <Suspense>
                    <ItemPlanet url={item.homeworld} />
                </Suspense>
            </div>
            <div>
                <Suspense>
                    {
                        item.films.map(item => (
                            <ItemMovie url={item} key={item.split("/")[5]} />
                        ))
                    }
                </Suspense>
            </div>
            <div>
                <Suspense>
                    {
                        item.starships.map(item => (
                            <ItemStarship url={item} key={item.split("/")[5]} />
                        ))
                    }
                </Suspense>
            </div>
            <div>
                <Suspense>
                    {
                        item.vehicles.map(item => (
                            <ItemVehicle url={item} key={item.split("/")[5]} />
                        ))
                    }
                </Suspense>
            </div>
        </div>
    )
}

export default PeopleDetail;