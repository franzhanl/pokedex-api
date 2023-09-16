import { styled } from 'styled-components';

const StyledHeader = styled.header`
    background-color:  rgb(238, 107, 47);
    display: flex;
    justify-content: center;
    width: 100%;
    height: 70px;
`
const StyledHeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 850px;

    @media (max-width: 1020px) {
        width: 550px;
    }  

    @media (max-width: 600px) {
        width: 330px;
    }   
`
const StyledNav = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2px;
    align-items: center;
`
export { StyledHeader, StyledHeaderContent, StyledNav }