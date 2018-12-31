import * as genresAPI from "./fakeGenreService";
import Like from "../components/common/like";

const movies = [
  {
    _id: "1",
    title: "some",
    genre: { _id: "1", name: "Action" },
    numberInstock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2010-01-03T19:04:28.809Z",
    Like: false
  },
  {
    _id: "2",
    title: "some2",
    genre: { _id: "2", name: "Action" },
    numberInstock: 4,
    dailyRentalRate: 2.5,
    publishDate: "2010-01-03T19:04:28.809Z",

    Like: false
  },
  {
    _id: "3",
    title: "some",
    genre: { _id: "3", name: "Action" },
    numberInstock: 2,
    dailyRentalRate: 2.5,
    publishDate: "2010-01-03T19:04:28.809Z",
    Like: false
  },
  {
    _id: "4",
    title: "some",
    genre: { _id: "4", name: "Action" },
    numberInstock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2010-01-03T19:04:28.809Z",
    Like: false
  },
  {
    _id: "5",
    title: "some",
    genre: { _id: "5", name: "Action" },
    numberInstock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2010-01-03T19:04:28.809Z",
    Like: false
  },
  {
    _id: "6",
    title: "some",
    genre: { _id: "6", name: "Action" },
    numberInstock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2010-01-03T19:04:28.809Z",
    Like: false
  },
  {
    _id: "7",
    title: "s7ome",
    genre: { _id: "7", name: "Action" },
    numberInstock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2010-01-03T19:04:28.809Z",
    Like: false
  },
  {
    _id: "8",
    title: "some",
    genre: { _id: "8", name: "Action" },
    numberInstock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2010-01-03T19:04:28.809Z",
    Like: false
  },
  {
    _id: "9",
    title: "9some",
    genre: { _id: "9", name: "Action" },
    numberInstock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2010-01-03T19:04:28.809Z",
    Like: false
  },
  {
    _id: "10",
    title: "some10",
    genre: { _id: "10", name: "Action" },
    numberInstock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2010-01-03T19:04:28.809Z",
    Like: false
  },
  {
    _id: "11",
    title: "11some",
    genre: { _id: "11", name: "Action" },
    numberInstock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2010-01-03T19:04:28.809Z",
    Like: false
  }
];
export function getMovies() {
  return movies;
}

export function getMovie(id) {
  return movies.find(m => m._id === id);
}

export function saveMovie(movie) {
  let movieInDb = movies.find(m => m._id === movie._id) || {};
  movieInDb.title = movie.title;
  movieInDb.numberInstock = movie.numberInstock;
  movieInDb.dailyRentalRate = movie.dailyRentalRate;
  movieInDb.publishDate = movie.publishDate;
}

export function removeMovie(movie) {
  for (let index in movies) {
    let curMovie = movies[index];
    if (curMovie._id === movie._id) {
      movies.splice(index, 1);
      break;
    }
  }
}

export function onLikePressed(movie) {
  for (let index in movies) {
    let curMovie = movies[index];
    if (curMovie._id === movie._id) {
      curMovie.Like = !curMovie.Like;
      break;
    }
  }
}
