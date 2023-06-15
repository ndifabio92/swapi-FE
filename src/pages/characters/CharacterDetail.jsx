import React, {lazy, Suspense} from "react";
import {Accordion, AccordionDetails, AccordionSummary, Breadcrumbs, Link, Typography} from "@mui/material";
import {useParams} from 'react-router-dom';
import Loader from "../../components/ui/Loader/Loader";
import useApiGetPeopleById from "../../hooks/useApiGetPeopleById";
import './styles/charactersDetail.css'
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TableVehicles from "../../components/vehicles/TableVehicles";

const ItemCharacter = lazy(() => import('../../components/characters/ItemCharacter'));
const ItemMovie = lazy(() => import('../../components/movies/ItemMovie'));
const ItemPlanet = lazy(() => import('../../components/planets/ItemPlanet'));
// const ItemStarship = lazy(() => import('../../components/starships/ItemStarship'));
// const ItemVehicle = lazy(() => import('../../components/vehicles/ItemVehicle'));
const TableStarships = lazy(() => import('../../components/starships/TableStarships'));


const CharacterDetail = () => {
    const {id} = useParams();
    const {data, loading, error} = useApiGetPeopleById(id);
    return (
        <>
            {
                loading ? <Loader isLoading={loading}/>
                    :
                    <div className="container-characters-detail">
                        <div className="container-div">
                            <Breadcrumbs separator=">" aria-label="breadcrumb" style={{color: "white"}}>
                                <Link href="/Characters" style={{color: "white"}} underline="none">
                                    CHARACTERS
                                </Link>
                                <Typography color="text.primary">
                                    <span>{data.name.toUpperCase()}</span>
                                </Typography>
                            </Breadcrumbs>
                        </div>
                        <div className="container-characters-homeworld">
                            <Suspense>
                                <ItemCharacter item={data}/>
                                <ItemPlanet url={data.homeworld}/>
                            </Suspense>
                        </div>
                        <div className="container-div">
                            {
                                data.films.length !== 0 &&
                                <>
                                    {/*<h2 style={{ color: "white" }}>Films</h2>*/}
                                    <Accordion className="container-character-accordion">
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon/>}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                            className="container-character-accordionSumary"
                                        >
                                            <Typography className="title">Films</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Suspense>
                                                {
                                                    data.films.map(item => (
                                                        <ItemMovie url={item} key={item.split("/")[5]}/>
                                                    ))
                                                }
                                            </Suspense>
                                        </AccordionDetails>
                                    </Accordion>
                                </>
                            }
                        </div>
                        <div className="container-div">
                            {
                                data.starships.length !== 0 &&
                                <>
                                    {/*<h2 style={{ color: "white" }}>Starships</h2>*/}
                                    {/*<Suspense>*/}
                                    {/*    {*/}
                                    {/*        data.starships.map(item => (*/}
                                    {/*            <ItemStarship url={item} key={item.split("/")[5]} />*/}
                                    {/*        ))*/}

                                    {/*    }*/}
                                    {/*</Suspense>*/}
                                    <Accordion className="container-character-accordion">
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon/>}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                            className="container-character-accordionSumary"
                                        >
                                            <Typography className="title">Starships</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Suspense>
                                                <TableStarships urls={data.starships}/>
                                            </Suspense>
                                        </AccordionDetails>
                                    </Accordion>
                                    {/*<Suspense>*/}
                                    {/*    <TableStarships urls={data.starships}/>*/}
                                    {/*</Suspense>*/}
                                </>
                            }
                        </div>
                        <div className="container-div">
                            {
                                data.vehicles.length !== 0 &&
                                <>
                                    {/*<h2 style={{ color: "white" }}>Vehicles</h2>*/}
                                    {/*<Suspense>*/}
                                    {/*    {*/}
                                    {/*        data.vehicles.map(item => (*/}
                                    {/*            <ItemVehicle url={item} key={item.split("/")[5]} />*/}
                                    {/*        ))*/}
                                    {/*    }*/}
                                    {/*</Suspense>*/}
                                    <Accordion className="container-character-accordion">
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon/>}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                            className="container-character-accordionSumary"
                                        >
                                            <Typography className="title">Vehicles</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Suspense>
                                                <TableVehicles urls={data.vehicles}/>
                                            </Suspense>
                                        </AccordionDetails>
                                    </Accordion>
                                    {/*<Suspense>*/}
                                    {/*    <TableStarships urls={data.vehicles}/>*/}
                                    {/*</Suspense>*/}
                                </>
                            }
                        </div>
                    </div>
            }
        </>
    )
}

export default CharacterDetail;