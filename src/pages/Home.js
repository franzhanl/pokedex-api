import React, { useState } from "react";
import { Main } from "../components/Main/Main";
import { SearchType } from "../components/SearchType/SearchType";
import { styled } from "styled-components";

const StyledContainer = styled.div`
    width: 1000px;
`

const Home = () => {

    const [selectedType, setSelectedType] = useState("")

    return(
        <StyledContainer>
            <SearchType setSelectedType={setSelectedType} />
            <Main selectedType={selectedType} />
        </StyledContainer>
    )
}

export { Home }