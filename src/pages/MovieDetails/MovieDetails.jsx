import css from './MovieDetails.module.css';
import { useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

export default function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/?api_key=ce0c06de642193a801e7421c7d30b9dd`
    )
      .then(res => res.json())
      .then(res => setMovieDetails(res))
      .catch(error => console.error(error));
  }, [movieId]);

  return (
    <>
      <div className={css.movie_container}>
        <h1 className={css.movie_title}>{movieDetails.title}</h1>
        <p className={css.movie_tagline}>{movieDetails.tagline}</p>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movieDetails.backdrop_path}`}
          alt={movieDetails.title}
          title={movieDetails.title}
          width="600"
        />
        <h3 className={css.movie_subtitle}>Overview</h3>
        <p>{movieDetails.overview}</p>
        <p>Release date: {movieDetails.release_date}</p>
        <p>User score: {movieDetails.vote_average}</p>
        <Link to={'cast'}>
          <strong>Cast</strong>
        </Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to={'reviews'}>
          <strong>Reviews</strong>
        </Link>
        <Outlet />
      </div>
    </>
  );
}
