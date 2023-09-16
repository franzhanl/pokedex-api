import React, { useState, useEffect, useContext} from "react";
import { Cards } from "../Cards/Cards";
import { Button } from "../Button/Button";
import { FadeLoader } from "react-spinners";
import { ThemeContext } from "../../contexts/ThemeContext";
import { StyledCards, StyledButton, StyledLoad } from  './PokemonStyles';
import { fetchAllPokemons, fetchPokemon } from "../../services/pokemon";

const Pokemon = ({selectedType}) => {
    const [pokemonData, setPokemonData] = useState([])
    const [pokesOnScreen, setPokesOnScreen] = useState([])
    const [loading, setLoading] = useState(true)
    const [quantityPokesOnScreen, setQuantityPokesOnScreen] = useState(10)
    
    const { theme } = useContext(ThemeContext)

    async function setingResponsePokeData(){
        setLoading(true)
        let respJson = await fetchAllPokemons()
        await getPokemon(respJson.results)
        setLoading(false)
    }

    async function getPokemon(pokemons){
        pokemons.map( async (pokemon) => {
            const respJson = await fetchPokemon(pokemon.url)
            if (selectedType == ""){
                setPokemonData( (state) => {
                    state=[...state, respJson] 
                    state.sort((a, b) => a.id - b.id)
                    return state
                })
            }else{
                respJson.types.map( (types) => {
                    if (types.type.name == selectedType){
                        setPokemonData( (state) => {
                            state=[...state, respJson] 
                            state.sort((a, b) => a.id - b.id)
                            return state
                        })
                    }
                })
            }            
        })
    }

    function cleanScreen() {
        setPokesOnScreen("")
        setPokemonData("")
        setQuantityPokesOnScreen(10)
    }

    useEffect( () => {
        cleanScreen()
        setingResponsePokeData()      
    }, [selectedType])

    useEffect( () => {
        setPokesOnScreen(pokemonData.slice(0, quantityPokesOnScreen))
    }, [pokemonData, quantityPokesOnScreen])

    return(
        <main style={{backgroundColor: theme.background}}>
            <StyledCards><Cards pokemons={pokesOnScreen} /></StyledCards>
            <StyledLoad><FadeLoader color="#36D7B7" loading={loading} /></StyledLoad>
            <StyledButton>
                {!loading ? <Button onClick={ () => setQuantityPokesOnScreen(quantityPokesOnScreen + 10) }>
                    Show more Pokémons 
                </Button> : ("") }
            </StyledButton>
        </main>
    )
}

export { Pokemon }
