import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/ui/Navbar/Navbar";

import NotFound from "../pages/not-found/NotFound";
import Films from "../pages/movies/Films";
import Characters from "../pages/characters/Characters";
import Planets from "../pages/planets/Planets";
import Starships from "../pages/starships/Starships";
import Vehicles from "../pages/vehicles/Vehicles";
import CharacterDetail from "../pages/characters/CharacterDetail";


export const SwapiRoutes = () => {
    return (
        <>
            <Navbar />
            <div style={{ marginLeft: "32px", marginRight: "32px" }}>
                <Routes>
                    <Route path="/" element={<Films />} />
                    <Route path="/characters" element={<Characters />} />
                    <Route path="/character/:id" element={<CharacterDetail />}></Route>
                    <Route path="/planets" element={<Planets />} />
                    <Route path="/starships" element={<Starships />} />
                    <Route path="/vehicles" element={<Vehicles />} />

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </>
    )
}