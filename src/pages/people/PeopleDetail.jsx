import React, { Suspense, lazy } from "react";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import { useParams } from 'react-router-dom';

const ItemPeople = lazy(() => import('../../components/people/ItemPeople'));
const ItemMovie = lazy(() => import('../../components/movies/ItemMovie'));
const ItemPlanet = lazy(() => import('../../components/planets/ItemPlanet'));
const ItemStarship = lazy(() => import('../../components/starships/ItemStarship'));
const ItemVehicle = lazy(() => import('../../components/vehicles/ItemVehicle'));

import './styles/peopleDetail.css'
import useApiGetPeopleById from "../../hooks/useApiGetPeopleById";
import Loader from "../../components/ui/Loader/Loader";

const PeopleDetail = () => {
    const { id } = useParams();
    const { data, loading, error } = useApiGetPeopleById(id);
    console.log(data)
    return (
        <>
            {
                loading ? <Loader isLoading={loading} />
                    :
                    <div className="container-people-detail">
                        <div>
                            <Breadcrumbs separator=">" aria-label="breadcrumb" style={{ color: "white" }}>
                                <Link href="/people" style={{ color: "white" }} underline="none">
                                    PEOPLE
                                </Link>
                                <Typography color="text.primary">
                                    <span>{data.name.toUpperCase()}</span>
                                </Typography>
                            </Breadcrumbs>
                        </div>
                        <div className="container-people-homeworld">
                            <Suspense>
                                <ItemPeople item={data} />
                                <ItemPlanet url={data.homeworld} />
                            </Suspense>
                        </div>
                        <div>
                            {
                                data.films.length !== 0 &&
                                <>
                                    <h2 style={{ color: "white" }}>Films</h2>
                                    <Suspense>
                                        {
                                            data.films.map(item => (
                                                <ItemMovie url={item} key={item.split("/")[5]} />
                                            ))
                                        }
                                    </Suspense>
                                </>
                            }
                        </div>
                        <div>
                            {
                                data.starships.length !== 0 &&
                                <>
                                    <h2 style={{ color: "white" }}>Starships</h2>
                                    <Suspense>
                                        {
                                            data.starships.map(item => (
                                                <ItemStarship url={item} key={item.split("/")[5]} />
                                            ))
                                        }
                                    </Suspense>
                                </>
                            }
                        </div>
                        <div>
                            {
                                data.vehicles.length !== 0 &&
                                <>
                                    <h2 style={{ color: "white" }}>Vehicles</h2>
                                    <Suspense>
                                        {
                                            data.vehicles.map(item => (
                                                <ItemVehicle url={item} key={item.split("/")[5]} />
                                            ))
                                        }
                                    </Suspense>
                                </>
                            }
                        </div>
                    </div>
            }
        </>
    )
}

export default PeopleDetail;