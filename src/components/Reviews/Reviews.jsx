import css from './Reviews.module.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Reviews() {
  const [movieReviews, setMovieReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=ce0c06de642193a801e7421c7d30b9dd`
    )
      .then(res => res.json())
      .then(res => setMovieReviews(res.results))
      .catch(error => console.error(error));
  }, [movieId]);

  return (
    <>
      <ul className={css.review_list}>
        {movieReviews.map(review => (
          <li key={review.id} className={css.review_item}>
            <p className={css.review_author}>{review.author}:</p>
            <p className={css.review_content}>{review.content}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
