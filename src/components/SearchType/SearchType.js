import React, { useEffect, useState } from "react";
import { styled } from "styled-components";

const StyledType = styled.div`
    background-color: #424242;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const StyledSelect = styled.select`
    background-color: #ee6b2f;
    color: white;
    padding: 12px;
    width: 250px;
    border: none;
    font-size: 20px;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
    appearance: button;
    outline: none;
    border-radius: 10px;
    text-transform: capitalize;
    opacity: 0.9;

    &:hover {
        cursor: pointer;
        opacity: 1; 
    }

`
const StyledOption = styled.option`
    background-color: #FF8C00;
    font-size: 18px;

    &:hover {
        cursor: pointer;
        background-color: red; 
    }
    
`
const SearchType = ({setSelectedType}) => {

    const [types, setTypes] = useState([])

    const handleSelectChange = (event) => {
        const selectedType = event.target.value
        setSelectedType(selectedType)
    }

    async function fetchTypes(){
        try{
            const resp = await fetch("https://pokeapi.co/api/v2/type/") 
            return await resp.json()
        }catch (error){
            console.error("fetchTypes error: ", error)
        }
    }

    async function getTypes(){
        await fetchTypes().then( (resp) => resp.results.map( (type) => { 
            return(
                setTypes( (state) => {
                    state = [...state, type.name]
                    return  state
                })
            )
        }))
        
        
    }

    function removeUselessTypesByName(typeNameToRemove){
        let typeId = types.indexOf(typeNameToRemove)
        if(typeId >= 0){
            types.splice(typeId)
        } 
        
    }

    useEffect( () => {
        getTypes()
    },[])

    return(
        <StyledType>
            { types.length > 0 ? (
                removeUselessTypesByName("shadow"),
                removeUselessTypesByName("unknown")
                ) : ("") 
            }
            <StyledSelect onChange={ (event) => handleSelectChange(event) } name="pokemons" id="cars">
                <StyledOption value="">all</StyledOption>
                {types.map( (type, index) => {
                    return <StyledOption key={index} value={type}>{type}</StyledOption>
                })}
            </StyledSelect>                       
        </StyledType>
    )
}

export { SearchType }