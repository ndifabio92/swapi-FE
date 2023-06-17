import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/ui/Navbar/Navbar";

import NotFound from "../pages/not-found/NotFound";
import Films from "../pages/movies/Films";
import FilmDetail from "../pages/movies/FilmDetail";
import Characters from "../pages/characters/Characters";
import Planets from "../pages/planets/Planets";
import Starships from "../pages/starships/Starships";
import Vehicles from "../pages/vehicles/Vehicles";
import CharacterDetail from "../pages/characters/CharacterDetail";
import {HomePage} from "../pages/home/HomePage";


export const SwapiRoutes = () => {
    return (
        <>
            <Navbar />
            <div style={{ marginLeft: "32px", marginRight: "32px" }}>
                <Routes>
                    <Route exact path="/" element={<HomePage/>} />
                    <Route exact path="/films" element={<Films />} />
                    <Route exact path="/film/:id" element={<FilmDetail />} />
                    <Route exact path="/characters" element={<Characters />} />
                    <Route exact path="/characters/:id" element={<CharacterDetail />}/>
                    <Route exact path="/planets" element={<Planets />} />
                    <Route exact path="/starships" element={<Starships />} />
                    <Route exact path="/vehicles" element={<Vehicles />} />

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </>
    )
}