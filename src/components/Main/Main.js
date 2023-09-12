import React, { useState, useEffect, useContext} from "react";
import { Cards } from "../Cards/Cards";
import { Button } from "../Button/Button";
import { FadeLoader } from "react-spinners";
import { ThemeContext } from "../../contexts/ThemeContext";
import { StyledCards, StyledButton, StyledLoad } from  './MainStyles';

const Main = ({selectedType}) => {
    const [apiUrl, setApiUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=1281')
    const [pokemonData, setPokemonData] = useState([])
    const [pokesOnScreen, setPokesOnScreen] = useState([])
    const [loading, setLoading] = useState(true)
    const [quantityPokesOnScreen, setQuantityPokesOnScreen] = useState(10)
    
    const { theme } = useContext(ThemeContext)

    async function setingResponsePokeData(){
        setLoading(true)
        let resp = await fetchPokeData()
        await getPokemon(resp.results)
        setLoading(false)
    }

    async function fetchPokeData(){
        try{
            const resp = await fetch(apiUrl) 
            return await resp.json()
        }catch (error){
            console.error("fetchPokeData error: ", error)
        }
    }

    async function getPokemon(pokemons){
        pokemons.map( async (pokemon) => {
            const resp = await fetch(pokemon.url)
            const respJson = await resp.json()
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

    useEffect( () => {
        setPokesOnScreen("")
        setPokemonData("")
        setQuantityPokesOnScreen(10)

        async function fetchData(){
            await setingResponsePokeData()
        }

        fetchData()
        
    }, [selectedType])

    useEffect( () => {
        setPokesOnScreen(pokemonData.slice(0, quantityPokesOnScreen))
        
    }, [pokemonData, quantityPokesOnScreen])

    return(
        <main style={{backgroundColor: theme.background}}>
            <StyledCards>
                <Cards pokemons={pokesOnScreen} />
            </StyledCards>
            <StyledLoad>
                <FadeLoader color="#36D7B7" loading={loading} />           
            </StyledLoad>
            <StyledButton>
                <Button onClick={ () => setQuantityPokesOnScreen(quantityPokesOnScreen + 10) }> Show more Pokémons </Button>
            </StyledButton>
        </main>
    )
}

export { Main }
