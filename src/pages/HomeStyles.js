import { styled } from "styled-components";

const StyledContainer = styled.div`
    width: 1000px;

    @media (max-width: 1020px) {
        width: 600px;
    }  

    @media (max-width: 600px) {
        width: 320px;
    }      
`
export { StyledContainer }