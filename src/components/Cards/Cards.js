import React from 'react'
import { styled } from 'styled-components'
import { Link } from 'react-router-dom'
import { Card } from '../Card/Card'

const StyledLink = styled(Link) `
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
    color: black;
`

const Cards = ({pokemons}) => {
    return(
        <> 
            {pokemons !== "" ? (
                pokemons.map( (pokemon, index) => {
                    return(
                        <StyledLink key={index} to={`/pokeinfo/${pokemon.id}`} >
                            <Card pokemon={pokemon} />
                        </StyledLink>
                    )
                })
            ):("")}
        </>
    )
}

export { Cards }
