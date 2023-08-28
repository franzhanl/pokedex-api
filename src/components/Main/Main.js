import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Card } from "../Card/Card";
import { Button } from "../Button/Button"
import styled from "styled-components";
import { FadeLoader } from "react-spinners";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

const StyledMain = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    padding: 20px 0;
    width: 1000px;
`;

const Main = () => {
    const [apiUrl, setApiUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=10')
    const [pokemonData, setPokemonData] = useState([])
    const [loading, setLoading] = useState(true)
    const [nextUrl, setNextUrl] = useState()
    // const [previousUrl, setPreviousUrl] = useState()
    const { theme } = useContext(ThemeContext)

    async function setRespPokeData(){
        setLoading(true)
        let respData = await fetchPokeData()
        setNextUrl(respData.next)
        // setPreviousUrl(respData.previous)
        getPokemon(respData.results)
        setLoading(false)
    }

    async function fetchPokeData(){
        const resp = await fetch(apiUrl) 
        return await resp.json()
    }

    async function getPokemon(pokemons){
        pokemons.map( async (pokemon) => {
            const resp = await fetch(pokemon.url)
            const respJson = await resp.json()
            setPokemonData( (state) => {
                state=[...state, respJson] 
                state.sort((a, b) => a.id - b.id)
                return state
            })
        })
    }

    async function loadMorePokemons(){
        setApiUrl(nextUrl) 
    }

    useEffect( () => {
        setRespPokeData()
    }, [apiUrl])

    return(
        <>
            <StyledMain style={{backgroundColor: theme.background}}>
                <Card pokemons={pokemonData} />
                <FadeLoader color="#36D7B7" loading={loading} />           
            </StyledMain>
            <Button onClick={ () => loadMorePokemons() }>Carregar mais</Button>
            

        </>
    )
}

export { Main }