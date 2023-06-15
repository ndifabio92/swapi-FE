import React, { Suspense, lazy } from "react";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import { useParams } from 'react-router-dom';
import Loader from "../../components/ui/Loader/Loader";
import useApiGetPeopleById from "../../hooks/useApiGetPeopleById";
import './styles/charactersDetail.css'

const ItemCharacter = lazy(() => import('../../components/characters/ItemCharacter'));
const ItemMovie = lazy(() => import('../../components/movies/ItemMovie'));
const ItemPlanet = lazy(() => import('../../components/planets/ItemPlanet'));
const ItemStarship = lazy(() => import('../../components/starships/ItemStarship'));
const ItemVehicle = lazy(() => import('../../components/vehicles/ItemVehicle'));
const TableStarships = lazy(() => import('../../components/starships/TableStarships'));


const CharacterDetail = () => {
    const { id } = useParams();
    const { data, loading, error } = useApiGetPeopleById(id);
    return (
        <>
            {
                loading ? <Loader isLoading={loading} />
                    :
                    <div className="container-characters-detail">
                        <div>
                            <Breadcrumbs separator=">" aria-label="breadcrumb" style={{ color: "white" }}>
                                <Link href="/Characters" style={{ color: "white" }} underline="none">
                                    CHARACTERS
                                </Link>
                                <Typography color="text.primary">
                                    <span>{data.name.toUpperCase()}</span>
                                </Typography>
                            </Breadcrumbs>
                        </div>
                        <div className="container-characters-homeworld">
                            <Suspense>
                                <ItemCharacter item={data} />
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
                                    <Suspense>
                                        <TableStarships urls={data.starships}/>
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

export default CharacterDetail;