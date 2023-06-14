import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/ui/Navbar/Navbar";
import NotFound from "../pages/not-found/NotFound";


const Films = lazy(() => import('../pages/movies/Films'));
const People = lazy(() => import('../pages/people/People'));
const PeopleDetail = lazy(() => import('../pages/people/PeopleDetail'));
const Planets = lazy(() => import('../pages/planets/Planets'));
const Starships = lazy(() => import('../pages/starships/Starships'));
const Vehicles = lazy(() => import('../pages/vehicles/Vehicles'));

export const SwapiRoutes = () => {
    return (
        <>
            <Navbar />
            <div style={{ marginLeft: "32px", marginRight: "32px" }}>
                <Routes>
                    <Route path="/" element={<Films />} />
                    <Route path="/people" element={<People />} />
                    <Route path="/people/:id" element={<PeopleDetail />}></Route>
                    <Route path="/planets" element={<Planets />} />
                    <Route path="/starships" element={<Starships />} />
                    <Route path="/vehicles" element={<Vehicles />} />

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </>
    )
}