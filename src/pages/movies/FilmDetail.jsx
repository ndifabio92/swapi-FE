import { lazy, Suspense } from 'react';
import { useParams } from "react-router-dom";
import useApiGetResourceById from "../../hooks/useApiGetResourceById";
import Loader from "../../components/ui/Loader/Loader";
import {Accordion, AccordionDetails, AccordionSummary, Breadcrumbs, Link, Typography} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ListCharacters from "../../components/characters/ListCharacters";
// import BreadcrumbsComponent from "../../components/ui/Breadcrumbs/BreadcrumbsComponent";

const ItemMovie = lazy(() => import('../../components/movies/ItemMovie'));
const TableStarships = lazy(() => import('../../components/starships/TableStarships'));
const TableVehicles = lazy(() => import('../../components/vehicles/TableVehicles'));

const FilmDetail = () => {
    const { id } = useParams();
    const { data, loading, error } = useApiGetResourceById(id, "films");
    return (
        <>
            {
                loading ? <Loader isLoading={loading} />
                    :
                    <div className="container-characters-detail">
                        <div className="container-div">
                            <Breadcrumbs separator=">" aria-label="breadcrumb" style={{color: "white"}}>
                                <Link href="/films" style={{color: "white"}} underline="none">
                                    FILMS
                                </Link>
                                <Typography color="text.primary">
                                    <span>{data?.title.toUpperCase()}</span>
                                </Typography>
                            </Breadcrumbs>
                        </div>
                        <div className="container-div">
                            <Suspense>
                                <ItemMovie url={data.url} />
                            </Suspense>
                        </div>
                        <div className="container-div">
                            {
                                data.characters !== 0 &&
                                <Accordion className="container-character-accordion">
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        className="container-character-accordionSumary"
                                    >
                                        <Typography className="title">Characters</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Suspense>
                                            <ListCharacters urls={data.characters} />
                                        </Suspense>
                                    </AccordionDetails>
                                </Accordion>
                            }
                        </div>
                        <div className="container-div">
                            {
                                data.starships.length !== 0 &&
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
                                            <TableStarships urls={data.starships} />
                                        </Suspense>
                                    </AccordionDetails>
                                </Accordion>
                            }
                        </div>
                        <div className="container-div">
                            {
                                data.vehicles.length !== 0 &&
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
                                            <TableVehicles urls={data.vehicles} />
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

export default FilmDetail;