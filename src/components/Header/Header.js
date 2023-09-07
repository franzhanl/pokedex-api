import React from "react";
import { ThemeTogglerButton } from "../ThemeTogglerButton/ThemeTogglerButton";
import { styled } from 'styled-components';

const StyledHeader = styled.header`
    background-color:  #ee6b2f;
    display: flex;
    justify-content: center;
    width: 100%;
    /* max-width: 1400px; */
    height: 70px;
`
const StyledTitle = styled.div`
    display: flex;
    width: 850px;
    justify-content: space-between;
`

const Header = () => {
    return(
        <StyledHeader>
            <StyledTitle>
                <h1>Pokemon</h1>
                <nav><ThemeTogglerButton /></nav>
            </StyledTitle>
        </StyledHeader>
    )
}

export { Header }