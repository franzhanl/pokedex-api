import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Card } from "../Card/Card";
import { Button } from "../Button/Button"
import styled from "styled-components";

const StyledMain = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 1000px;
`;

const Main = () => {
    const [apiUrl, setApiUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=10')
    const [pokemonData, setPokemonData] = useState([])
    const [nextUrl, setNextUrl] = useState()
    const [previousUrl, setPreviousUrl] = useState()

    async function setRespPokeData(){
        let respData = await fetchPokeData()
        setNextUrl(respData.next)
        setPreviousUrl(respData.previous)
        await getPokemon(respData.results)
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
                return state
            })
        })
    }

    async function loadMorePokemons(){
        setApiUrl(nextUrl) 
        // await setRespPokeData()
    }

    useEffect( () => {
        setRespPokeData()
    }, [apiUrl])

    return(
        // console.log("Proximo " + nextUrl),
        // console.log("Anterior " + previousUrl),
        // console.log("pokemonData " + pokemonData.length),
        <>
            <StyledMain>
                    <Card pokemons={pokemonData}></Card>
            </StyledMain>

            <Button onClick={ () => loadMorePokemons() }>Carregar mais</Button>
        </>
    )
}

export { Main }