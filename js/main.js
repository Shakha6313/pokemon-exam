let pokemonArray = pokemons.slice(0, 48);
let moviesArray = movies.slice(0, 50);

let elList = document.querySelector(".list")
let elPokemon = document.querySelector(".btn__pokemon")
let elMovies = document.querySelector(".btn__movies")
let elBoth = document.querySelector(".btn__both")
let elClear = document.querySelector(".btn__clear")

elPokemon.addEventListener("click", function(){
    renderPokemon(pokemonArray)
});

elMovies.addEventListener("click", function(){
    renderMovies(moviesArray)
});

elBoth.addEventListener("click", function(){
    console.log(elBoth);
});

elClear.addEventListener("click", function(){
    elList.innerHTML = null
});

function renderPokemon(array) {
    elList.innerHTML = null;
    for (let item of array){
        let newLi = document.createElement("li");
        elList.appendChild(newLi);
        newLi.classList.add("mb-2", "align-items-center" ,"d-flex" ,"flex-column","justify-content-center", "mb-3", "bg-light", "rounded-5", "shadow-lg", "p-5");
        
        let newImg = document.createElement("img");
        newLi.appendChild(newImg);
        newLi.classList.add("pokemon__pic");
        newImg.src = item.img
        newImg.width = "200";
        
        let newH3 = document.createElement("h3");
        newLi.appendChild(newH3);
        newH3.classList.add("heading");
        newH3.textContent = item.name;    
        
        let newP = document.createElement("p");
        newLi.appendChild(newP);
        newP.classList.add("text");
        newP.textContent = item.type;
        
        let newP2 = document.createElement("p");
        newLi.appendChild(newP2);
        newP2.classList.add("text");
        newP2.textContent = item.height;
        
        let newP3 = document.createElement("p");
        newLi.appendChild(newP3);
        newP3.classList.add("text");
        newP3.textContent = item.weight;
        
    }
}

renderPokemon(pokemonArray)

function renderMovies(array) {
    elList.innerHTML = null;

    for (let i = 0; i < array.length; i++){
        let newLi = document.createElement("li");
        elList.appendChild(newLi);
        newLi.classList.add( "row-cols-5", "flex-wrap", "align-items-center","d-flex" ,"flex-column","justify-content-center", "mb-3", "bg-light", "rounded-5", "shadow-lg", "gap-4");

        let newImg = document.createElement("img");
        newLi.appendChild(newImg);
        newImg.src = `https://img.youtube.com/vi/${array[i].ytid}/mqdefault.jpg`
        newImg.width = "500";

        let newH3 = document.createElement("h3");
        newLi.appendChild(newH3);
        newH3.textContent = array[i].Title; 

        let newP = document.createElement("p");
        newLi.appendChild(newP);
        newP.textContent = array[i].Categories;

        let newP2 = document.createElement("p");
        newLi.appendChild(newP2);
        newP2.textContent = array[i].imdb_rating;

        let newP3 = document.createElement("p");
        newLi.appendChild(newP3);
        newP3.textContent = array[i].movie_year;
    }
}
    
    renderMovies(moviesArray)