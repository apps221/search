// https://omdbapi.com/?s=fast&apikey=5b537eef
const movieList = document.querySelector('.movie-list');
const input = document.getElementById('myInput');
const targetSection = document.getElementById('moviePosters');
//remember to use input.value to access input text
async function movieSearch() {
    const inputValue = input.value;
    const movies = await fetch(`https://omdbapi.com/?s=${inputValue}&apikey=5b537eef`);
    const moviesData = await movies.json();
    const moviesFive = moviesData.Search.slice(0, 5);
    console.log(moviesFive);
    movieList.innerHTML = moviesFive.map(movie => 
        `<div class="movie-list">
            <div class="movie">
              <div class="movie-card">
                <div class="movie-card__container">
                  <h3>${movie.Title}</h4>
                <p><b>Year: </b>${movie.Year}</p>
                <p><b>imbID: </b>${movie.imdbID}</p>
                <p><b>Type: </b>${movie.Type}</p>
                <img src="${movie.Poster}" alt="" class="movie__img">
                </p>
              </div>
            </div>
          </div>
        </div>`
    ).join("");
    scrollToSection();
}
function scrollToSection() {
  targetSection.scrollIntoView({ behavior: 'smooth' });
}