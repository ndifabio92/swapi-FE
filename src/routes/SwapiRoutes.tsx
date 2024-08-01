import { Route, Routes } from "react-router-dom";
import Navbar from "../components/ui/Navbar/Navbar";
import HomePage from "../pages/home/HomePage";
import NotFoundPage from "../pages/not-found/NotFound";
import Films from "../pages/films/Films";
import FilmDetail from "../pages/films/FilmDetail";
import Vehicles from "../pages/vehicles/Vehicles";
import Characters from "../pages/characters/Characters";
import CharacterDetail from "../pages/characters/CharacterDetail";
import Planets from "../pages/planets/Planets";
import Starships from "../pages/starships/Starships";


export const SwapiRoutes = () => {
    return (
        <>
            <Navbar />
            <div style={{ marginLeft: "32px", marginRight: "32px" }}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/films" element={<Films />} />
                    <Route path="/films/:id" element={<FilmDetail />} />
                    <Route path="/characters" element={<Characters />} />
                    <Route path="/characters/:id" element={<CharacterDetail />} />
                    <Route path="/planets" element={<Planets />} />
                    <Route path="/starships" element={<Starships />} />
                    <Route path="/vehicles" element={<Vehicles />} />

                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </div>
        </>
    )
}

