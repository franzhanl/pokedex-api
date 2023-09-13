import { Card } from '../Card/Card'
import { StyledLink, StyledCard } from './CardsStyles'

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
