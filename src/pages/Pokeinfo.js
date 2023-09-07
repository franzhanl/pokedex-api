import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import { FadeLoader } from "react-spinners";
import { Card } from "../components/Card/Card";

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 1000px;    
    background-color: rgb(190, 190, 190);
`
const StyledInfo = styled.div`
    display: flex;
    flex-direction: row;
    margin: 21px 30px;
    align-items: center;
`
const StyledPokemon = styled.div`
    align-content: center;
    background-color: rgb(240, 240, 240);
    text-transform: capitalize;
`
const StyledAbilities = styled.div`
    background-color: rgb(240, 240, 240);
    margin-left: 30px;
    border-radius: 7px;
    text-transform: capitalize;
`
const StyledMoves = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`
const StyledLi = styled.li`
    padding: 20px;
    border: 1px solid grey;  
    margin: 20px;
    display: block;
    border-radius: 7px;
    background-color: rgb(240, 240, 240);
`

const Pokemon = () => {
    const [pokemon, setPokemon] = useState([])
    const [ability, setAbility]= useState([])
    const [loading, setLoading] = useState(true)

    const { id } = useParams()

    async function fetchPokeData(idPokemon){
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`) 
        return await resp.json()
    }

    async function fetchPokeAbilitiesDescription(url) {
        const resp = await fetch(url)
        return await resp.json()
    }

    useEffect( () => {
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
            {loading ? (
                <FadeLoader color="#36D7B7" loading={loading} />
            ) : (
                <StyledContainer>
                    <StyledInfo>
                        <StyledPokemon>
                            <Card pokemon={pokemon} />
                        </StyledPokemon>
                        <StyledAbilities> 
                            <h2>Abilities</h2>
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

                    <h2>Moves</h2>
                    <StyledMoves> 
                        { pokemon.moves.map( (moves, index) => {
                            return <StyledLi key={index}> {moves.move.name} </StyledLi>
                        })}  
                    </StyledMoves> 
                </StyledContainer>
            )}  
        </div>    
    )
}

export { Pokemon }