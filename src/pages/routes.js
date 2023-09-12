import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { PokeInfo } from "./PokeInfo";

const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={ Home } />
                <Route path="/pokeinfo/:id" Component={ PokeInfo } />
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }