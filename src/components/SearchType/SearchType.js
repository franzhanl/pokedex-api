import React, { useEffect, useState } from 'react';
import { StyledType, StyledSelect, StyledOption } from './SearchTypeStyles';
import { fetchTypes } from '../../services/type';

const SearchType = ({setSelectedType}) => {

    const [types, setTypes] = useState([])

    const handleSelectChange = (event) => {
        const selectedType = event.target.value
        setSelectedType(selectedType)
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
                {types.map( (type, index) => <StyledOption key={index} value={type}>{type}</StyledOption> )}
            </StyledSelect>                       
        </StyledType>
    )
}

export { SearchType }