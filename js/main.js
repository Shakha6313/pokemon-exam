let pokemonArray = pokemons.slice(0, 20);
let moviesArray = movies.slice(0, 20);
let elList = document.querySelector(".list")
let elPokemon = document.querySelector(".btn__pokemon")
let elMovies = document.querySelector(".btn__movies")
let elBoth = document.querySelector(".btn__both")
let elClear = document.querySelector(".btn__clear")
let elPoki = document.querySelector("#pokilogo")
let elMuvi = document.querySelector("#muvilogo")

elPokemon.addEventListener("click", function(){
    render(pokemonArray)

    elPoki.classList.remove("d-none")
    elPoki.classList.remove(".wider")
    elPoki.classList.remove(".higher")
    elMuvi.classList.add("d-none")
});

elMovies.addEventListener("click", function(){
    render(moviesArray)
    elMuvi.classList.remove("d-none")
    elMuvi.classList.remove(".wider")
    elMuvi.classList.remove(".higher")
    elPoki.classList.add("d-none")
});

elBoth.addEventListener("click", function(){
    let elDuo = moviesArray.concat(pokemonArray) 
    render(elDuo)

    elPoki.classList.remove(".pokilogo")
    elMuvi.classList.remove(".muvilogo")
    elPoki.classList.remove("d-none")
    elMuvi.classList.remove("d-none")
    elPoki.classList.add("wider")
    elMuvi.classList.add("higher")
});

elClear.addEventListener("click", function(){
    elList.innerHTML = null
    elPoki.classList.remove(".pokilogo")
    elMuvi.classList.remove(".muvilogo")
    elPoki.classList.add("d-none")
    elMuvi.classList.add("d-none")
    elPoki.classList.remove("wider")
    elMuvi.classList.remove("higher")
});

function render(array) {
    elList.innerHTML = null;
    
    for (let i = 0; i < array.length; i++) {
        
        let newLi = document.createElement("li");
        elList.appendChild(newLi)
        newLi.classList.add("d-flex", "justify-content-start", "text-align-center", "align-items-center", "flex-column", "border", "rounded-3")
        let newImg = document.createElement("img")
        newLi.appendChild(newImg)

        let newH3 = document.createElement("h3")
        newLi.appendChild(newH3)

        let newP3 = document.createElement("p")
        newLi.appendChild(newP3)

        let newP = document.createElement("p")
        newLi.appendChild(newP)

        let newP2 = document.createElement("p")
        newLi.appendChild(newP2)
        
        if (array[i].name) {
            newImg.src = array[i].img
            newH3.textContent = array[i].name
            newP3.textContent= array[i].type
            newP.textContent = array[i].height
            newP2.textContent = array[i].weight
        } else{
            newImg.src = `https://img.youtube.com/vi/${array[i].ytid}/mqdefault.jpg`
            newImg.width = 200;
            newImg.height = 100;
            newH3.textContent = array[i].Title
            newH3.classList.add("text-center", "mt-3")
            newP.textContent = array[i].imdb_rating
            newP2.textContent = array[i].movie_year
        }
    }   
} 