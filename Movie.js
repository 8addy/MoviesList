//Movie Class
class Movie {
  constructor(title, director, no) {
    this.title = title;
    this.director = director;
    this.no = no;
  }

  getMovies = () => {
    let moviesList = JSON.parse(localStorage.getItem('books'));
    return moviesList;
  };

  showMovies = callback => {
    let moviesList = this.getMovies();
    callback(moviesList);
  };

  addMovie = (movie, callback) => {
    let movies = this.getMovies();
    movies.push(movie);
    localStorage.setItem('books', JSON.stringify(movies));
    callback(movies);
  };

  deleteMovie = (no, callback) => {
    let movies = this.getMovies();
    movies.forEach((movie, i) => {
      if (movie.no == no) {
        movies.splice(i, 1);
      }
    });
    localStorage.setItem('books', JSON.stringify(movies));
    callback(movies);
  };
}
