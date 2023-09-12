import { styled } from "styled-components";

const StyledType = styled.div`
    background-color: rgb(66, 66, 66);
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const StyledSelect = styled.select`
    background-color: rgb(238, 107, 47);
    color: white;
    padding: 12px;
    width: 250px;
    border: none;
    font-size: 20px     ;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
    appearance: button;
    border-radius: 10px;
    text-transform: capitalize;
    opacity: 0.9;

    &:hover {
        cursor: pointer;
        opacity: 1; 
    }

`
const StyledOption = styled.option`
    background-color: rgb(255, 140, 0);
    font-size: 18px;

    &:hover {
        cursor: pointer;
        background-color: red; 
    }
    
`
export { StyledType, StyledSelect, StyledOption }