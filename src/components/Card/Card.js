import React from "react";
import { StyledDivRelative, StyledCard, StyledId, StyledImg, 
    StyledTypes, StyledNormal, StyledFighting, StyledFlying, StyledPoison,  
    StyledGround, StyledRock, StyledBug, StyledGhost, StyledSteel, StyledFire,
    StyledWater, StyledGrass, StyledElectric, StyledPsychic, StyledIce, StyledDragon,
    StyledDark, StyledFairy } from "./CardStyles";

const Card = ({pokemon}) => {

    function leadigZero(num, qty){ 
        return String(num).padStart(qty, '0') 
    }  

    return(
        <StyledDivRelative>
            <StyledCard>
                <StyledId> {leadigZero(pokemon.id, 4)} </StyledId>
                <StyledImg src={pokemon.sprites.other["official-artwork"].front_default} alt={"Image of " + pokemon.name}  />
                <h3> {pokemon.name} </h3>
                <StyledTypes>
                    {pokemon.types.map( (types, index) => { 
                        switch (types.type.name){
                            case "normal": return <StyledNormal key={index}> {types.type.name} </StyledNormal> 
                            case "fighting": return <StyledFighting key={index}> {types.type.name} </StyledFighting> 
                            case "flying": return <StyledFlying key={index}> {types.type.name} </StyledFlying> 
                            case "poison": return <StyledPoison key={index}> {types.type.name} </StyledPoison>
                            case "ground": return <StyledGround key={index}> {types.type.name} </StyledGround> 
                            case "rock": return <StyledRock key={index}> {types.type.name} </StyledRock> 
                            case "bug": return <StyledBug key={index}> {types.type.name} </StyledBug> 
                            case "ghost": return <StyledGhost key={index}> {types.type.name} </StyledGhost> 
                            case "steel": return <StyledSteel key={index}> {types.type.name} </StyledSteel> 
                            case "fire": return <StyledFire key={index}> {types.type.name} </StyledFire> 
                            case "water": return <StyledWater key={index}> {types.type.name} </StyledWater> 
                            case "grass": return <StyledGrass key={index}> {types.type.name} </StyledGrass>
                            case "electric": return <StyledElectric key={index}> {types.type.name} </StyledElectric> 
                            case "psychic": return <StyledPsychic key={index}> {types.type.name} </StyledPsychic> 
                            case "ice": return <StyledIce key={index}> {types.type.name} </StyledIce> 
                            case "dragon": return <StyledDragon key={index}> {types.type.name} </StyledDragon> 
                            case "dark": return <StyledDark key={index}> {types.type.name} </StyledDark> 
                            case "fairy": return <StyledFairy key={index}> {types.type.name} </StyledFairy> 
                            
                            //---Useless types---
                            // case "unknown": return <StyledElectric key={index}> {types.type.name} </StyledElectric> 
                            // case "shadow": return <StyledElectric key={index}> {types.type.name} </StyledElectric> 
                        }
                    })}
                </StyledTypes>
            </StyledCard>
        </StyledDivRelative>
        
    )
}

export { Card }