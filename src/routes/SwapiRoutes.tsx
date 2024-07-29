import { Route, Routes } from "react-router-dom";
import Navbar from "../components/ui/Navbar/Navbar";
import HomePage from "../pages/home/HomePage";


export const SwapiRoutes = () => {
    return (
        <>
            <Navbar />
            <div style={{ marginLeft: "32px", marginRight: "32px" }}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/films" element={<><h1>films</h1></>} />
                    <Route path="/films/:id" element={<>films/:id</>} />
                    <Route path="/characters" element={<>characters</>} />
                    <Route path="/characters/:id" element={<></>} />
                    <Route path="/planets" element={<></>} />
                    <Route path="/starships" element={<></>} />
                    <Route path="/vehicles" element={<></>} />

                    <Route path="*" element={<></>} />
                </Routes>
            </div>
        </>
    )
}

