

async function consomePokeAPI() {
    
    const pokemonsDaAPI = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1020', {
        method: "GET",
        "content-type" : "application/json"
    })
    .then(response => {
            return response.json()
    })
    .catch(
        error => console.log(error)
      )
     

    return pokemonsDaAPI
}

async function searchPokemon(){

    const inputTag = document.querySelector("input")

    const searchedPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputTag.value}`, {
        method: "GET",
        "content-type" : "application/json"
    })
    .then(response => {
            return response.json()
    })
    .catch(
        error => console.log(error),
      )

    return searchedPokemon
}



consomePokeAPI()
