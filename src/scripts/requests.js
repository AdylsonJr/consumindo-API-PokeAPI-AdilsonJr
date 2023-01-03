

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
    const ulTag = document.querySelector("ul")

    const inputTag = document.querySelector("input")

    const liTag = createUnsearch()

    const searchedPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputTag.value}`, {
        method: "GET",
        "content-type" : "application/json"
    })
    .then(response => {
            return response.json()
    })
    
    .catch(
        error => console.log(error),

        liTag.classList.toggle("hidden"),
        ulTag.append(liTag)
    
        
      )

    return searchedPokemon
}



consomePokeAPI()
