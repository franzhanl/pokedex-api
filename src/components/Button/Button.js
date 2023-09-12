import { StyledButton } from "./ButtonStyles"

const Button = (props) => {
    return <StyledButton onClick={props.onClick} > {props.children} </StyledButton>
}

export { Button }