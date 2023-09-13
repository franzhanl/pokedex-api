import { ThemeTogglerButton } from "../ThemeTogglerButton/ThemeTogglerButton";
import pokemonLogo from '../../assets/images/pokemon-logo.png';
import { StyledHeader, StyledTitle, StyledNav } from './HeaderStyles';



const Header = () => {
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