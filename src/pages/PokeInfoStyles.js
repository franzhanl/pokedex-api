import { styled } from "styled-components";

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 1000px;  
    
    @media (max-width: 1020px) {
        width: 550px;
    }  

    @media (max-width: 600px) {
        width: 330px;
    }   
`
const StyledInfo = styled.div`
    display: flex;
    flex-direction: row;
    margin: 21px 30px;
    align-items: center;
    gap: 30px;

    @media (max-width: 1020px) {
        flex-direction: column;
    }  
`
const StyledPokemon = styled.div`
    align-content: center;
`
const StyledAbilities = styled.div`
    background-color: rgb(240, 240, 240);
    border-radius: 7px;
    text-transform: capitalize;
    /* min-width: 690px; */

    p {
        padding: 0 10px;
    }

`
const StyledMoves = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin-right: 40px;
    justify-content: center;
`
const StyledLi = styled.li`
    padding: 20px;
    margin: 20px;
    display: block;
    border-radius: 7px;
    background-color: rgb(240, 240, 240); 
`
const StyledHr = styled.hr`
    width: 80%;
`
const StyledButton = styled.div`
    display: flex;
    justify-content: right;
    padding: 0 30px 0 0;

    @media (max-width: 1020px) {
        justify-content: center;
        padding: 0;
    }  
`
export { 
    StyledContainer, StyledInfo, StyledPokemon, StyledAbilities, 
    StyledMoves, StyledLi, StyledHr, StyledButton
}