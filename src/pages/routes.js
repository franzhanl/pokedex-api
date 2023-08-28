import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Pokemon } from "../components/Pokeinfo/Pokeinfo";
import { Main } from "../components/Main/Main";

const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={ Main } />
                <Route path="/pokeinfo/:id" Component={ Pokemon } />
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }