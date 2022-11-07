const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const limit = 1
let offset = 0





function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) =>
            `<section class="content ${pokemon.type}">
            <div class="firstLine">
                <span class="name">${pokemon.name}</span>
                <span class="number">${pokemon.number}</span>
            </div>
            <div class="divType">
            ${pokemon.types.map((type) => `<span class="type ${type}">${type}</span>`).join('')}
            </div>
            <div class="photo">
                <img src="${pokemon.photo}" alt="${pokemon.name}">
            </div>

            <div class="pokemonAbout">

                <ul class="menu">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Base States</a></li>
                    <li><a href="#">Evolution</a></li>
                </ul>

                <span class="number">Species: ${pokemon.weight}</span>
                <span class="number">Height: ${pokemon.height}</span>
                <span class="number">Base Experience: ${pokemon.baseExp}</span>
               

               
</div>


</section>`
        ).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)











