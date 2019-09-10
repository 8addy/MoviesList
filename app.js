const moviesList = document.getElementById('movies-list');
const AlertMsg = document.getElementById('alertMsg');
const form = document.getElementById('movie-form');
//Instanciate Movie Class
const MovieC = new Movie();
//Instanciate UI Class
const UIC = new UI(moviesList, AlertMsg);

//Get Movies
document.addEventListener('DOMContentLoaded', () => {
  MovieC.showMovies(movies => {
    UIC.render(movies);
  });
});

//Add Movie
form.addEventListener('submit', e => {
  e.preventDefault();
  const title = form.title.value;
  const director = form.director.value;
  const no = form.no.value;

  const movie = { title, director, no };

  MovieC.addMovie(movie, movies => {
    let msg = 'Movie Added!';
    let type = 'success';
    UIC.render(movies);
    UIC.setAlert(msg, type);
  });
  form.reset();
});

moviesList.addEventListener('click', e => {
  if (e.target.classList.contains('delete')) {
    const no = e.target.parentElement.previousElementSibling.textContent;
    MovieC.deleteMovie(no, movies => {
      let msg = 'Movie Deleted!';
      let type = 'danger';
      UIC.render(movies);
      UIC.setAlert(msg, type);
    });
  }
});
