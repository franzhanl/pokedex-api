import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.div `
    width: 200px;
    height: 250px;
    text-align: center;

`
// background-color: SteelBlue;
const Card = ({pokemons}) => {
    
    return(
        <>  
            {
                pokemons.map( (pokemon, index) => {
                    return(
                        <StyledCard key={index}>
                            <h2> {pokemon.id} </h2>
                            <img src={pokemon.sprites.front_default} />
                            <h3> {pokemon.name} </h3>
                        </StyledCard>
                    )
                })
            }
        </>
    )
}

export { Card }
