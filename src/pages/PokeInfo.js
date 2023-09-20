import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import { Card } from "../components/Card/Card";
import { ThemeContext } from "../contexts/ThemeContext";
import { Button } from "../components/Button/Button";
import { fetchPokeData, fetchPokeAbilitiesDescription } from "../services/poke-info";
import { 
    StyledContainer, StyledInfo, StyledPokemon, StyledAbilities, 
    StyledMoves, StyledLi, StyledHr, StyledButton
} from './PokeInfoStyles';

const PokeInfo = () => {
    const [pokemon, setPokemon] = useState([])
    const [ability, setAbility]= useState([])
    const [loading, setLoading] = useState(true)

    const { theme } = useContext(ThemeContext)
    const { id } = useParams()

    useEffect( () => {
        window.scrollTo(0, 0);
        async function fetchData() {
            await fetchPokeData(id).then( (result) => { 
                setPokemon(result)   
                result.abilities.map( (pokeAbility) => { 
                    return(
                        fetchPokeAbilitiesDescription(pokeAbility.ability.url).then( 
                            (result) => setAbility( (state) => { 
                                state = [ ...state, result]
                                return state
                            }) 
                        )
                    )   
                })                                                         
                setLoading(false) 
            })     
        }
        fetchData()
    }, [id])

    return ( 
        <div>
            {loading ? ( <FadeLoader color="#36D7B7" loading={loading} />
            ) : (
                <StyledContainer style={{backgroundColor: theme.background }}>
                    <StyledInfo>
                        <StyledPokemon><Card pokemon={pokemon} /></StyledPokemon>
                        <StyledAbilities> 
                            <h2>Abilities</h2>
                            <StyledHr />
                            { ability.map( (ability, index) => {
                                return(
                                    <div key={index}>
                                        <h3> {ability.name}</h3>
                                        <p> {ability.effect_entries[1].effect} </p>
                                    </div>                
                                )
                            })} 
                        </StyledAbilities>
                    </StyledInfo>

                    <StyledButton><Link to={"/"}><Button> Explore more Pokémons </Button></Link></StyledButton>

                    <h2>Moves</h2>
                    <StyledHr />
                    <StyledMoves> 
                        {pokemon.moves.map((moves, index) => <StyledLi key={index}>{moves.move.name}</StyledLi>)}  
                    </StyledMoves> 
                </StyledContainer>
            )}  
        </div>    
    )
}

export { PokeInfo }