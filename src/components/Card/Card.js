import React from "react";
import { styled } from "styled-components";

const StyledCard = styled.div`
    width: 200px;
    height: 270px;
    text-align: center;
    background-color: rgb(240, 240, 240);
    text-transform: capitalize;   
    
`
const StyledId = styled.h2`
    color: grey;
`
const StyledImg = styled.img`
    width: 100px;
`
const StyledTypes = styled.div`
    display: flex;
    justify-content: center;
`
const StyledNormal = styled.h4`
    background-color: rgb(248, 201, 195);
    padding: 3px 10px;
    border: 0;
    border-radius: 50px;
`
const StyledFighting = styled.h4`
    background-color: rgb(232, 0, 0);
    padding: 3px 10px;
    border: 0;
    border-radius: 50px;
`
const StyledFlying = styled.h4`
    background-color: rgb(54, 175, 228);
    padding: 3px 10px;
    border: 0;
    border-radius: 50px;
`
const StyledPoison = styled.h4`
    background-color: rgb(209, 0, 255);
    padding: 3px 10px;
    border: 0;
    border-radius: 50px;
`
const StyledGround = styled.h4`
    background-color: rgb(107, 98, 64);
    padding: 3px 10px;
    border: 0;
    border-radius: 50px;
`
const StyledRock = styled.h4`
    background-color: rgb(123, 83, 40);
    padding: 3px 10px;
    border: 0;
    border-radius: 50px;
`
const StyledBug = styled.h4`
    background-color: rgb(195, 203, 46);
    padding: 3px 10px;
    border: 0;
    border-radius: 50px;
`
const StyledGhost = styled.h4`
    background-color: rgb(140, 7, 244);
    padding: 3px 10px;
    border: 0;
    border-radius: 50px;
`
const StyledSteel = styled.h4`
    background-color: rgb(160, 168, 201);
    padding: 3px 10px;
    border: 0;
    border-radius: 50px;
`
const StyledFire = styled.h4`
    background-color: orange;
    padding: 3px 10px;
    border: 0;
    border-radius: 50px;
`
const StyledWater = styled.h4`
    background-color: rgb(54, 105, 228);
    padding: 3px 10px;
    border: 0;
    border-radius: 50px;
`
const StyledGrass = styled.h4`
    background-color: rgb(109, 229, 110);
    padding: 3px 10px;
    border: 0;
    border-radius: 50px;
`
const StyledElectric = styled.h4`
    background-color: rgb(233, 232, 46);
    padding: 3px 10px;
    border: 0;
    border-radius: 50px;
`
const StyledPsychic = styled.h4`
    background-color: rgb(255, 7, 182);
    padding: 3px 10px;
    border: 0;
    border-radius: 50px;
`
const StyledIce = styled.h4`
    background-color: rgb(173, 255, 255);
    padding: 3px 10px;
    border: 0;
    border-radius: 50px;
`
const StyledDragon = styled.h4`
    background-color: rgb(0, 151, 104);
    padding: 3px 10px;
    border: 0;
    border-radius: 50px;
`
const StyledDark = styled.h4`
    background-color: rgb(114, 114, 114);
    padding: 3px 10px;
    border: 0;
    border-radius: 50px;
`
const StyledFairy = styled.h4`
    background-color: rgb(255, 87, 254);
    padding: 3px 10px;
    border: 0;
    border-radius: 50px;
`

const Card = ({pokemon}) => {

    function leadigZero(num, qty){ 
        return String(num).padStart(qty, '0') 
    }  

    return(
        <StyledCard>
            <StyledId> {leadigZero(pokemon.id, 4)} </StyledId>
            <StyledImg src={pokemon.sprites.other["official-artwork"].front_default}  />
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
    )
}

export { Card }