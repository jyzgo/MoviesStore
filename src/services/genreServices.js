import http from "./httpServices";
import { getGenere } from "./fakeGenreService";

export function getGenres() {
  return http.get("http://localhost:3900/api/genres");
}
