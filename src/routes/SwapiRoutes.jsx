import React from "react";

import { Route, Routes } from "react-router-dom";
import Navbar from "../components/ui/Navbar/Navbar";
import { HomePage } from "../pages/home/HomePage";
import { Films } from "../pages/movies/Films";
import NotFound from "../pages/not-found/NotFound";
import { People } from "../pages/people/People";

export const SwapiRoutes = () => {
    return (
        <>
            <Navbar />
            <div style={{ marginLeft: "32px", marginRight: "32px" }}>
                <Routes >
                    <Route path="/" element={<HomePage />} />
                    <Route path="/films" element={<Films />} />
                    <Route path="/people" element={<People />} />

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </>
    )
}