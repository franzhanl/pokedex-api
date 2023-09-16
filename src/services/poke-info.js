
async function fetchPokeData(idPokemon){
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`) 
    return await resp.json()
}

async function fetchPokeAbilitiesDescription(url) {
    const resp = await fetch(url)
    return await resp.json()
}

export { fetchPokeData, fetchPokeAbilitiesDescription }