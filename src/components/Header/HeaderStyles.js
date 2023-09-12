import { styled } from 'styled-components';

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
export { StyledHeader, StyledTitle, StyledNav }