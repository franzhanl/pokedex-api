import React, { useContext } from "react";
import { ThemeTogglerButton } from "../ThemeTogglerButton/ThemeTogglerButton";
import { styled } from 'styled-components';
import pokemonLogo from '../../assets/images/pokemon-logo.png';
import { ThemeContext } from "../../contexts/ThemeContext";

const StyledHeader = styled.header`
    background-color:  rgb(238, 107, 47);
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
const StyledNav = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2px;
    align-items: center;
`

const Header = () => {

    const { theme } = useContext(ThemeContext)

    return(
        <StyledHeader>
            <StyledTitle>
                <img src={pokemonLogo} alt="logo do pokemon" />
                <StyledNav>
                    <ThemeTogglerButton />
                </StyledNav>
            </StyledTitle>
        </StyledHeader>
    )
}

export { Header }