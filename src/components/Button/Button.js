import { styled } from 'styled-components';

const StyledButton = styled.button`
    background-color:  #ee6b2f;
    padding: 20px;
    border: 0;
    border-radius: 50px;
    opacity: 0.9;

    &:hover {
        cursor: pointer;
        opacity: 1; 
    }
`

const Button = (props) => {
    return <StyledButton onClick={props.onClick} > {props.children} </StyledButton>
}

export { Button }