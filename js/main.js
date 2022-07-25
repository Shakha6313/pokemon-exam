let pokemonArray = pokemons.slice(0, 30);
let moviesArray = movies.slice(0, 30);

let elList = document.querySelector(".list")
let elPokemon = document.querySelector(".btn__pokemon")
let elMovies = document.querySelector(".btn__movies")
let elBoth = document.querySelector(".btn__both")
let elClear = document.querySelector(".btn__clear")

elPokemon.addEventListener("click", function(){
    renderPokemon(pokemonArray)
});

function renderPokemon(array) {
    
}