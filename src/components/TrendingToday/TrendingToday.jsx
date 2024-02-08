import { useEffect } from 'react';
import { useState } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';
import css from './TrendingToday.module.css';

export default function TrendingToday() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/trending/movie/day?api_key=ce0c06de642193a801e7421c7d30b9dd'
    )
      .then(res => res.json())
      .then(res => setTrendingMovies(res.results))
      .catch(error => console.error(error));
  }, []);

  return (
    <>
      <h1 className={css.title}>Trending today </h1>
      <MoviesList movies={trendingMovies} />
    </>
  );
}
