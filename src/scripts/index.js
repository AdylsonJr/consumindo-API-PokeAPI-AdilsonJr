
async function renderizaPokemons() {
    const ulTag = document.querySelector('ul')
    const liTag = createLoading()

    ulTag.append(liTag)

    setTimeout(()=>{liTag.classList.add("hidden")}, 2000)

    const listaDePokemons = await consomePokeAPI()

    listaDePokemons.results.forEach(pokemon => {
      
        const numeroNaPokedex = pokemon.url.slice(34, -1)

        
        const card = createCard(numeroNaPokedex, pokemon.name)
        
        
        setTimeout(()=>{
            ulTag.append(card)}, 2000)
        })
    }

        const inputTag = document.querySelector("input")
        const buttonTag = document.querySelector("button")

        buttonTag.addEventListener("click", async()=>{
            const ulTag = document.querySelector('ul')
            const liTag = createLoading()

            if(inputTag.value == ""){
                setTimeout(()=>{
                renderizaPokemons()}, 2000)
            }

            ulTag.innerHTML = ""

            ulTag.append(liTag)

            setTimeout(()=>{liTag.classList.add("hidden")}, 2000)

            const searchedPokemon = await searchPokemon()
            const searchCard = createSearchedCard(searchedPokemon)
            
            setTimeout(()=>{
                ulTag.append(searchCard)}, 2000)
            })
        

function createSearchedCard(search){
    const liTag = document.createElement("li")
    const imgTag = document.createElement("img")
    const h2Tag = document.createElement("h2")
    
    imgTag.src = search.sprites.front_default
    imgTag.alt = search.name
    h2Tag.innerText = search.name
    
    liTag.append(imgTag, h2Tag)
    
    return liTag
}

function createLoading(){
    const tagLi = document.createElement("li")
    const tagP = document.createElement("p")
    
    tagLi.classList.add("loading")
    tagP.innerText = "Carregando..."
    
    tagLi.appendChild(tagP)
    
    return tagLi
        
}

function createCard(numeroNaPokedex, nome){
    const liTag = document.createElement("li")
    const imgTag = document.createElement("img")
    const h2Tag = document.createElement("h2")
    
    imgTag.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numeroNaPokedex}.png`
    imgTag.alt = `${nome}`
    h2Tag.innerText = `${nome}`
    
    liTag.append(imgTag, h2Tag)
    
    return liTag
}     

renderizaPokemons()