import React, { useState } from "react";
import { Pokemon } from '../components/Pokemon/Pokemon';
import { SearchType } from "../components/SearchType/SearchType";
import { StyledContainer } from "./HomeStyles";

const Home = () => {

    const [selectedType, setSelectedType] = useState("")

    return(
        <StyledContainer>
            <SearchType setSelectedType={setSelectedType} />
            <Pokemon selectedType={selectedType} />
        </StyledContainer>
    )
}

export { Home }