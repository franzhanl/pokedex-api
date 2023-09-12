import { styled } from 'styled-components';

const StyledButton = styled.button`
    color: white;
    background-color:  rgb(238, 107, 47);
    padding: 20px;
    border: 0;
    border-radius: 50px;
    opacity: 0.9;
    font-size: 18px;

    &:hover {
        cursor: pointer;
        opacity: 1; 
    }
`

const Button = (props) => {
    return <StyledButton onClick={props.onClick} > {props.children} </StyledButton>
}

export { Button }