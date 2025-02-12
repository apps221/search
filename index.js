// https://omdbapi.com/?s=fast&apikey=5b537eef
const movieList = document.querySelector('.movie-list');
const input = document.getElementById('myInput');
//remember to use input.value to access input text
async function movieSearch() {
    const inputValue = input.value;
    const movies = await fetch(`https://omdbapi.com/?s=${inputValue}&apikey=5b537eef`);
    const moviesData = await movies.json();
  movieList.innerHTML = moviesData.map(movie => 
        ` <div class="movie-card__container">
                  <h3>Title</h4>
                <p><b>Year: </b>0000</p>
                <p><b>imbID: </b>000000000</p>
                <p><b>Type: </b>Undefined</p>
                <p><b>Poster: </b>
                <img src="" alt="" class="movie__img">
                </p>
              </div>`
    ).join("");
}

