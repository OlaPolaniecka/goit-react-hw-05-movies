import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';

export default function Cast() {
  const [movieCredits, setMovieCredits] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=ce0c06de642193a801e7421c7d30b9dd`
    )
      // eslint-disable-next-line
      .then(res => res.json())
      .then(res => setMovieCredits(res.cast))
      .catch(error => console.error(error));
  }, [movieId]);

  return (
    <>
      <div className={css.cast_container}>
        <ul className={css.cast_list}>
          {movieCredits.map(credit => (
            <li key={credit.id} className={css.cast_item}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${credit.profile_path}`}
                className={css.cast_image}
                alt={credit.name}
                title={credit.name}
                width="160"
              />
              <p className={css.cast_title}>{credit.name}</p>
              <p className={css.cast_character}>
                Character: {credit.character}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
