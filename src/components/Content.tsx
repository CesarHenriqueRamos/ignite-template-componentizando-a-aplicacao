import { MovieCard } from "./MovieCard";

interface MoviesProps{
  imdbID: string;
  Title: string;
  Poster: string;
  Runtime: string;
  Ratings:[]
}
interface SelectedGenreProps{
  title:string
}
export function Content(movies:MoviesProps,selectedGenre:SelectedGenreProps) {
  return(
    <div className="container">
        <header>
          <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
        </header>

        <main>
          <div className="movies-list">
            {movies.map(movie => (
              <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
      </div>
      )
}