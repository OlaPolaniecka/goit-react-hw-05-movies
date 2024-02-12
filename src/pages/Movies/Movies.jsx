import css from './Movies.module.css';
import { useState, useEffect } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import { MoviesList } from '../../components/MoviesList/MoviesList';

export default function Movies() {
  const [query, setQuery] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);

  const handleSearch = event => {
    setQuery(event);
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=ce0c06de642193a801e7421c7d30b9dd`
    )
      .then(response => response.json())
      .then(response => {
        setSearchMovies(response.results);
      })
      .catch(error => console.error(error));
  }, [query]);

  return (
    <>
      <div>
        <h1 className={css.movie_title}>Search movies</h1>
        {searchMovies.length === 0 ? (
          <SearchBar handleSearch={handleSearch} />
        ) : (
          ''
        )}
        <MoviesList movies={searchMovies} />
      </div>
    </>
  );
}
