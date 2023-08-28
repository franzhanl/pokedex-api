import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledCard = styled.div `
    width: 200px;
    height: 250px;
    text-align: center;
    background-color: rgb(210, 210, 210);
`
const Card = ({pokemons}) => {
    
    return(
        <>  
            {
                pokemons.map( (pokemon, index) => {
                    return(
                        <Link key={index} to={`/pokeinfo/${pokemon.id}`} >
                            <StyledCard >
                            <h2> {pokemon.id} </h2>
                            <img src={pokemon.sprites.front_default} />
                            <h3> {pokemon.name} </h3>
                            </StyledCard>
                        </Link>
                    )
                })
            }
        </>
    )
}

export { Card }
