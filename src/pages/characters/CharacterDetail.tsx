import { lazy, Suspense } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Breadcrumbs, Link, Typography } from "@mui/material";
import { useParams } from 'react-router-dom';
import Loader from "../../components/ui/Loader/Loader";
import useApiGetResourceById from "../../hooks/useApiGetResourceById";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Result as ResultCharacter } from "../../interfaces/Character";
import { ResourceType } from "../../components/types/ResourceType";

const ItemCharacter = lazy(() => import('../../components/characters/ItemCharacter'));
const ItemFilmsCharacter = lazy(() => import('../../components/films/ItemFilmCharacter'));
const ItemPlanet = lazy(() => import('../../components/planets/ItemPlanet'));
// const TableStarships = lazy(() => import('../../components/starships/TableStarships'));
// const TableVehicles = lazy(() => import('../../components/vehicles/TableVehicles'));

import './styles/charactersDetail.css'

const CharacterDetail = () => {
    const { id } = useParams();
    const { data, loading } = useApiGetResourceById<ResultCharacter>({ id: id, resource: ResourceType.People });

    return (
        <>
            {
                loading ? <Loader isLoading={loading} />
                    :
                    <div className="container-characters-detail">
                        <div className="container-div">
                            <Breadcrumbs separator=">" aria-label="breadcrumb" style={{ color: "white" }}>
                                <Link href="/characters" style={{ color: "white" }} underline="none">
                                    CHARACTERS
                                </Link>
                                <Typography color="text.primary">
                                    <span>{data?.name.toUpperCase()}</span>
                                </Typography>
                            </Breadcrumbs>
                        </div>
                        <div className="container-characters-homeworld">
                            <Suspense>

                                <ItemCharacter item={data} />
                                <ItemPlanet url={data?.homeworld} />
                            </Suspense>
                        </div>
                        <div className="container-div">
                            {
                                data?.films.length !== 0 &&
                                <Accordion className="container-character-accordion">
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        className="container-character-accordionSumary"
                                    >
                                        <Typography className="title">Films</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Suspense>
                                            {
                                                data?.films.map((item: string) => (
                                                    <ItemFilmsCharacter url={item} key={item.split("/")[5]} />
                                                ))
                                            }
                                        </Suspense>
                                    </AccordionDetails>
                                </Accordion>
                            }
                        </div>
                        <div className="container-div">
                            {
                                data?.starships?.length !== 0 &&
                                <Accordion className="container-character-accordion">
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        className="container-character-accordionSumary"
                                    >
                                        <Typography className="title">Starships</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Suspense>
                                            {/* <TableStarships urls={data.starships} /> */}
                                        </Suspense>
                                    </AccordionDetails>
                                </Accordion>

                            }
                        </div>
                        <div className="container-div">
                            {
                                data?.vehicles?.length !== 0 &&
                                <Accordion className="container-character-accordion">
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        className="container-character-accordionSumary"
                                    >
                                        <Typography className="title">Vehicles</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Suspense>
                                            {/* <TableVehicles urls={data.vehicles} /> */}
                                        </Suspense>
                                    </AccordionDetails>
                                </Accordion>
                            }
                        </div>
                    </div>
            }
        </>
    )
}

export default CharacterDetail;