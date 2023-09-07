import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Pokemon } from "./Pokeinfo";
import { Home } from "./Home";

const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={ Home } />
                <Route path="/pokeinfo/:id" Component={ Pokemon } />
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }