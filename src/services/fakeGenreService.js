import { getMovies } from "./services";
const movies = getMovies();
export function getGenere() {
  return [
    { _id: 1, name: "Action" },
    { _id: 2, name: "Comedy" },
    { _id: 3, name: "Thriller" }
  ];
}
export function getMovie(id) {
  return movies.find(m => m._id === id);
}
export function saveMovie(movie) {
  let movieInDb = movies.find(m => m._id === movie._id) || {};
  movieInDb.title = movie.title;
  movieInDb.genre = getGenere().find(g => g._id === movie.genreId);
  movieInDb.numberInStock = movie.numberInStock;
  movieInDb.dailyRentalRate = movie.dailyRentalRate;

  if (!movieInDb._id) {
    movieInDb._id = Date.now().toString();
    movies.push(movieInDb);
  }

  return movieInDb;
}
