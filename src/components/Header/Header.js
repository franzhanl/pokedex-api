import { ThemeTogglerButton } from "../ThemeTogglerButton/ThemeTogglerButton";
import pokemonLogo from '../../assets/images/pokemon-logo.png';
import { StyledHeader, StyledHeaderContent, StyledNav } from './HeaderStyles';



const Header = () => {
    return(
        <StyledHeader>
            <StyledHeaderContent>
                <img src={pokemonLogo} alt="logo do pokemon" />
                <StyledNav>
                    <ThemeTogglerButton />
                </StyledNav>
            </StyledHeaderContent>
        </StyledHeader>
    )
}

export { Header }