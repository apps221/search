// https://omdbapi.com/?s=fast&apikey=5b537eef
const input = document.getElementById('myInput');
//remember to use input.value to access input text
async function movieSearch() {
    const inputValue = input.value;
    const movies = await fetch(`https://omdbapi.com/?s=${inputValue}&apikey=5b537eef`);
    const moviesData = await movies.json();

}

