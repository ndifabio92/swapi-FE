import {useParams} from "react-router-dom";
import useApiGetResourceById from "../../hooks/useApiGetResourceById";
import Loader from "../../components/ui/Loader/Loader";
import {Accordion, AccordionDetails, AccordionSummary, Breadcrumbs, Link, Typography} from "@mui/material";
import React, {Suspense} from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TableVehicles from "../../components/vehicles/TableVehicles";
import TableStarships from "../../components/starships/TableStarships";
import ListCharacters from "../../components/characters/ListCharacters";

const FilmDetail = () => {
    const {id} = useParams();
    const {data, loading, error} = useApiGetResourceById(id, "films");

    return (
        <>
            {
                loading ? <Loader isLoading={loading}/>
                    :
                    <div>
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
                            {
                                data.characters.length !== 0 &&
                                <Suspense>
                                    <ListCharacters urls={data.characters}/>
                                </Suspense>
                            }
                        </div>
                        {/*<div className="container-div">*/}
                        {/*    {*/}
                        {/*        data.starships.length !== 0 &&*/}
                        {/*        <Accordion className="container-character-accordion">*/}
                        {/*            <AccordionSummary*/}
                        {/*                expandIcon={<ExpandMoreIcon/>}*/}
                        {/*                aria-controls="panel1a-content"*/}
                        {/*                id="panel1a-header"*/}
                        {/*                className="container-character-accordionSumary"*/}
                        {/*            >*/}
                        {/*                <Typography className="title">Starships</Typography>*/}
                        {/*            </AccordionSummary>*/}
                        {/*            <AccordionDetails>*/}
                        {/*                <Suspense>*/}
                        {/*                    <TableStarships urls={data.starships}/>*/}
                        {/*                </Suspense>*/}
                        {/*            </AccordionDetails>*/}
                        {/*        </Accordion>*/}
                        {/*    }*/}
                        {/*</div>*/}
                        {/*<div className="container-div">*/}
                        {/*    {*/}
                        {/*        data.vehicles.length !== 0 &&*/}
                        {/*        <Accordion className="container-character-accordion">*/}
                        {/*            <AccordionSummary*/}
                        {/*                expandIcon={<ExpandMoreIcon/>}*/}
                        {/*                aria-controls="panel1a-content"*/}
                        {/*                id="panel1a-header"*/}
                        {/*                className="container-character-accordionSumary"*/}
                        {/*            >*/}
                        {/*                <Typography className="title">Vehicles</Typography>*/}
                        {/*            </AccordionSummary>*/}
                        {/*            <AccordionDetails>*/}
                        {/*                <Suspense>*/}
                        {/*                    <TableVehicles urls={data.vehicles}/>*/}
                        {/*                </Suspense>*/}
                        {/*            </AccordionDetails>*/}
                        {/*        </Accordion>*/}
                        {/*    }*/}
                        {/*</div>*/}
                    </div>
            }

        </>
    )
}

export default FilmDetail;