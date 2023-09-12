import React from 'react'
import { styled } from 'styled-components'
import { Link } from 'react-router-dom'
import { Card } from '../Card/Card'

const StyledLink = styled(Link) `
    text-decoration: none;
    color: black;
`
const StyledCard = styled.div`
      
    div:nth-child(1) {
        transition: transform 0.3s ease, background-color 1s ease;
                
        &:hover{
            z-index:1;
            transform: translateX(0) scale(1.1);
            background-color: rgb(255, 176, 0);
            
        }
    }
    
`

const Cards = ({pokemons}) => {
    return(
        <> 
            {pokemons !== "" ? (
                pokemons.map( (pokemon, index) => {
                    return(
                        <StyledLink key={index} to={`/pokeinfo/${pokemon.id}`} >
                            <StyledCard>
                                <Card pokemon={pokemon} />
                            </StyledCard>
                        </StyledLink>
                    )
                })
            ):("")}
        </>
    )
}

export { Cards }
