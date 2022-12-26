/* Monte a lógica das requisições aqui */
// requests.js

async function consomePokeAPI() {
    // const loading = document.querySelector('.loading')

    const pokemonsDaAPI = await fetch('https://pokeapi.co/api/v2/pokemon', {
        method: "GET",
        "content-type" : "application/json"
    })
    .then(response => {
            return response.json()
    })
    .catch(
        error => console.log(error)
      )
    
    // loading.classList.add('hidden')
    

    return pokemonsDaAPI
}



consomePokeAPI()