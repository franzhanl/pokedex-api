
async function fetchAllPokemons(){
    try{
        const resp = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1281') 
        return await resp.json()
    }catch (error){
        console.error("!!!FetchAllPokemon ERROR!!!", error)
    }
}

async function fetchPokemon(url){
    try{
        const resp = await fetch(url) 
        return await resp.json()
    }catch (error){
        console.error("!!!FetchPokemon ERROR!!!", error)
    }
}

export { fetchAllPokemons, fetchPokemon }