import React from "react";

import { Route, Routes } from "react-router-dom";
import Navbar from "../components/ui/Navbar/Navbar";
import {HomePage} from "../pages/home/HomePage";
import {Films} from "../pages/movies/Films";
import NotFound from "../pages/not-found/NotFound";
import {People} from "../pages/peoples/People";

export const SwapiRoutes = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/films" element={<Films />} />
                <Route path="/peoples" element={<People />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}