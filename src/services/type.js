
async function fetchTypes(){
    try{
        const resp = await fetch("https://pokeapi.co/api/v2/type/") 
        return await resp.json()
    }catch (error){
        console.error("!!!FetchTypes ERROR!!! ", error)
    }
}

export { fetchTypes }