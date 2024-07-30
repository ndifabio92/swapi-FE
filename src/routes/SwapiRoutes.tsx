import { Route, Routes } from "react-router-dom";
import Navbar from "../components/ui/Navbar/Navbar";
import HomePage from "../pages/home/HomePage";
import NotFoundPage from "../pages/not-found/NotFound";
import Films from "../pages/films/Films";


export const SwapiRoutes = () => {
    return (
        <>
            <Navbar />
            <div style={{ marginLeft: "32px", marginRight: "32px" }}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/films" element={<Films />} />
                    <Route path="/films/:id" element={<>films/:id</>} />
                    <Route path="/characters" element={<>characters</>} />
                    <Route path="/characters/:id" element={<></>} />
                    <Route path="/planets" element={<></>} />
                    <Route path="/starships" element={<></>} />
                    <Route path="/vehicles" element={<></>} />

                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </div>
        </>
    )
}

