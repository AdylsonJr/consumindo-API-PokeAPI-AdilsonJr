/* Monte sua lógica aqui */
// Definimos essa função como assíncrona pois precisamos aguardar a resposta da função consomePokeAPI
async function renderizaPokemons() {
    const ulTag = document.querySelector('ul')
    const liTag = createLoading()

    ulTag.append(liTag)

    setTimeout(()=>{liTag.classList.add("hidden")}, 2000)

    const listaDePokemons = await consomePokeAPI()

    listaDePokemons.results.forEach(pokemon => {
      
        const numeroNaPokedex = pokemon.url.slice(34, -1)

        const inputTag = document.querySelector("input")
        const buttonTag = document.querySelector("button")

        const card = createCard(numeroNaPokedex, pokemon.name)

        setTimeout(()=>{
            ulTag.append(card)}, 2000)

        buttonTag.addEventListener("click", ()=>{
            
            if (inputTag.value === ""){
                ulTag.innerHTML = ""

                setTimeout(()=>{
                    ulTag.append(card)}, 2000)
            }
            if(inputTag.value.includes(pokemon.name)){
                const searchCard = createCard(numeroNaPokedex, pokemon.name)
                
                ulTag.innerHTML = ""

                ulTag.append(searchCard)
                    
            } 
            
        })


    })
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
// function createUnseached(){
//     const tagLi = document.createElement("li")
//      const tagP = document.createElement("p")

//      tagLi.classList.add("loading")
//      tagP.innerText = "Pokémon não encontrado"

//      tagLi.appendChild(tagP)

//      return tagLi
    
//  }